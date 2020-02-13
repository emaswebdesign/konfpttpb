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
  regularConference: string;
  doctorPoints: boolean;
  doctorLicenseNumber: string;
  fv: string;
  companyName: string;
  companyNip: string;
  companyAddress: string;
  companyNrDomu: string;
  companyNrLokalu: string;
  companyZip: string;
  companyPoczta: string;
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
  activeMember: boolean = false;
  secondStep: boolean = false;
  formSubmited: boolean = false;
  conferencePrice: number = 900;

  preconferenceActiveMember: object[] = [
    {
      value: "Prosze wybrać",
      title: "Prosze wybrać"
    },
    {
      value: "Nie chcę brać udziału",
      title: "Nie chcę brać udziału"
    },
    {
      value: "Frank Datillo CBT with couples - 300zł",
      title: "Frank Datillo: CBT with couples - 300zł"
    },
    {
      value: "Robert Leahy Emotional schema therapy - 300zł",
      title: "Robert Leahy: Emotional schema therapy - 300zł"
    },
    { value: "Michaela Swales - 100zł", title: "Michaela Swales - 100zł" }
  ];

  preconference: object[] = [
    {
      value: "Prosze wybrać",
      title: "Prosze wybrać"
    },
    {
      value: "Nie chcę brać udziału",
      title: "Nie chcę brać udziału"
    },
    {
      value: "Frank Datillo CBT with couples - 400zł",
      title: "Frank Datillo: CBT with couples - 400zł"
    },
    {
      value: "Robert Leahy Emotional schema therapy - 400zł",
      title: "Robert Leahy: Emotional schema therapy - 400zł"
    },
    { value: "Michaela Swales -200zł", title: "Michaela Swales - 200zł" }
  ];

  regularConference: object[] = [
    {
      value: "Prosze wybrać",
      title: "Prosze wybrać"
    },
    {
      value: "Nie chcę brać udziału",
      title: "Nie chcę brać udziału"
    },
    {
      value: "Eduardo Keegan: Just do it! Dealing with procrastination - 150zł",
      title: "Eduardo Keegan: Just do it! Dealing with procrastination - 150zł"
    },
    {
      value: "Frank Datillo: CBT with families - 150zł",
      title: "Frank Datillo: CBT with families - 150zł"
    },
    {
      value:
        "Małgorzata Bielak: Praca z trybami w narcystycznym zaburzeniu osobowości - 30zł",
      title:
        "Małgorzata Bielak: Praca z trybami w narcystycznym zaburzeniu osobowości - 30zł"
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
      doctorLicenseNumber: "",
      doctorPoints: false,
      preconference: "Prosze wybrać",
      regularConference: "Prosze wybrać",
      fv: "Nie dziękuję",
      companyName: "",
      companyNip: "",
      companyAddress: "",
      companyNrDomu: "",
      companyNrLokalu: "",
      companyZip: "",
      companyPoczta: "",
      companyCity: "",
      totalPrice: "",
      contributionPayed: ""
    };
  }

  // getMember() {
  //   this.http
  //     .get(`https://api.system.pttpb.pl/users/exists?email=${this.user.email}`)
  //     .subscribe((data: statusMember) => {
  //       this.activeMember = data.payed;
  //       this.activeMember
  //         ? (this.conferencePrice = 750)
  //         : (this.conferencePrice = 900);
  //       this.secondStep = true;
  //     });
  // }

  processForm() {
    this.user.totalPrice = this.conferencePrice;
    //this.user.contributionPayed = this.activeMember;
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
      console.log("elo", this.user.preconference);
      this.user.preconference == "Prekonferencja - Nie chcę brać udziału"
        ? (this.conferencePrice = 750)
        : (this.conferencePrice = 900);
    } else {
      console.log("elo2", this.user.preconference);
      this.user.preconference == "Prekonferencja - Nie chcę brać udziału"
        ? (this.conferencePrice = 900)
        : (this.conferencePrice = 1200);
    }
  }
}

interface statusMember {
  payed: boolean;
}
