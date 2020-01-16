import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class User {
  academicTitle: string;
  email: string;
  name: string;
  surname: string;
  institution: string;
  phoneNumber: string;
  preconference: string;
  regularconference: string;
  doctorPoints: boolean;
  doctorNumber: string;
  fv: string;
  companyName: string;
  companyNip: string;
  companyAddress: string;
  companyZip: string;
  companyCity: string;
  totalPrice: any;
  contributionPayed: any;
}

@Component({
  selector: "app-rejestracja",
  templateUrl: "./rejestracja.component.html",
  styleUrls: ["./rejestracja.component.css"]
})
export class RejestracjaComponent implements OnInit {
  user: User;
  activeMember: boolean;
  secondStep: boolean = false;
  formSubmited: boolean = false;
  conferencePrice: number = 900;

  preconference: object[] = [
    {
      value: "Prekonferencja - Nie chcę brać udziału",
      title: "Prekonferencja - Nie chcę brać udziału"
    },
    { value: "Prekonferenca warsztat 1", title: "Prekonferenca warsztat 1" },
    { value: "Prekonferenca warsztat 2", title: "Prekonferenca warsztat 2" },
    {
      value: "Prekonferenca warsztat 3",
      title: "Prekonferenca warsztat 3",
      disabled: true
    }
  ];

  regularconference: object[] = [
    {
      value: "Warsztat konferencja - Nie chcę brać udziału",
      title: "Warsztat konferencja - Nie chcę brać udziału"
    },
    { value: "Warsztat 1", title: "Warsztat 1" },
    { value: "Warsztat 2", title: "Warsztat 2" },
    {
      value: "Warsztat 3",
      title: "Warsztat 3",
      disabled: true
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.user = {
      academicTitle: "",
      email: "",
      name: "",
      surname: "",
      institution: "",
      phoneNumber: "",
      doctorNumber: "",
      doctorPoints: false,
      preconference: "Prekonferencja - Nie chcę brać udziału",
      regularconference: "Warsztaty - Nie chcę brać udziału",
      fv: "Nie dziękuję",
      companyName: "",
      companyNip: "",
      companyAddress: "",
      companyZip: "",
      companyCity: "",
      totalPrice: "",
      contributionPayed: ""
    };
  }

  getMember() {
    this.http
      .get(`https://api.system.pttpb.pl/users/exists?email=${this.user.email}`)
      .subscribe((data: statusMember) => {
        this.activeMember = data.payed;
        this.activeMember
          ? (this.conferencePrice = 750)
          : (this.conferencePrice = 900);
        this.secondStep = true;
      });
  }

  processForm() {
    this.user.totalPrice = this.conferencePrice;
    this.user.contributionPayed = this.activeMember;
    //console.log('mas', this.user)
    this.http
      .post("backend/insert.php", this.user)
      .subscribe((response: any) => {
        if (response.error == 0) {
          this.formSubmited = true;
        } else {
          console.error(response.data.error);
        }
      });
  }

  getPrice($event) {
    if (this.activeMember) {
      this.user.preconference == "Prekonferencja - Nie chcę brać udziału"
        ? (this.conferencePrice = 750)
        : (this.conferencePrice = 900);
    } else {
      this.user.preconference == "Prekonferencja - Nie chcę brać udziału"
        ? (this.conferencePrice = 900)
        : (this.conferencePrice = 1200);
    }
  }
}

interface statusMember {
  payed: boolean;
}
