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
  workshops: string[];
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
  workshop1: boolean;
  workshop1Price: number;
  workshop2: boolean;
  workshop2Price: number;
  workshop3: boolean;
  workshop3Price: number;
  workshop4: boolean;
  workshop4Price: number;
  workshop5: boolean;
  workshop5Price: number;
  workshop6: boolean;
  workshop6Price: number;
  selectedWorkshops: string[] = [];
  selectedPreconference: string;
  preconferencePrice: number = 0;

  preconference: object[] = [
    { regularPrice: 0, membersPrice: 0, title: "Nie chcę brać udziału" },
    {
      regularPrice: 400,
      membersPrice: 300,
      author: "Frank Datillo",
      title: "CBT with couples"
    },
    {
      regularPrice: 400,
      membersPrice: 300,
      author: "Robert Leahy",
      title: "Emotional schema therapy"
    },
    {
      regularPrice: 200,
      membersPrice: 100,
      author: "Michaela Swales",
      title: "workshop title"
    }
  ];

  workshop1Details: object = {
    value: "workshop1",
    author: "Eduardo Keegan",
    title: "Just do it! Dealing with procrastination",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop2Details: object = {
    value: "workshop2",
    author: "Frank Datillo",
    title: "CBT with families",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop3Details: object = {
    value: "workshop3",
    author: "Małgorzata Bielak",
    title: "Praca z trybami w narcystycznym zaburzeniu osobowości",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop4Details: object = {
    value: "workshop4",
    author: "Hubert Czupała",
    title:
      "Process-based CBT, czyli jak ewoluowały interwencje emocjonalne, poznawcze i behawioralne pod wpływem rozwoju badań nad kluczowymi procesami psychologicznej elastyczności",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop5Details: object = {
    value: "workshop5",
    author: "Mark Reinicke",
    title: "CBT with angry and oppositional youth",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop6Details: object = {
    value: "workshop6",
    author: "Mark Agnieszka Popiel, Ewa Pragłowska",
    title:
      "Skuteczne działanie w stresie – poznawczo-behawioralny program profilaktyki",
    regularPrice: 60,
    membersPrice: 30
  };

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
      preconference: "Nie chcę brać udziału",
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
      contributionPayed: "",
      workshops: []
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

  getBasePrice() {
    this.activeMember
      ? (this.conferencePrice = 750)
      : (this.conferencePrice = 900);
  }

  getPreconferencePrice($event: any) {
    let element = event.currentTarget as HTMLInputElement;

    this.preconferencePrice = parseFloat(element.value);
    this.selectedPreconference = element.id;
  }

  getWorkshop1Price($event) {
    let workshopSelected = event.currentTarget as HTMLInputElement;
    let workshopTitle = workshopSelected.value;

    if (this.workshop1) {
      this.activeMember
        ? (this.workshop1Price = 150)
        : (this.workshop1Price = 250);

      this.conferencePrice = this.conferencePrice + this.workshop1Price;
      this.selectedWorkshops.push(workshopTitle);
    } else {
      this.selectedWorkshops.splice(
        this.selectedWorkshops.indexOf(workshopTitle),
        1
      );

      this.conferencePrice = this.conferencePrice - this.workshop1Price;
      this.workshop1Price = undefined;
    }
  }

  getWorkshop2Price($event) {
    let workshopSelected = event.currentTarget as HTMLInputElement;
    let workshopTitle = workshopSelected.value;

    if (this.workshop2) {
      this.activeMember
        ? (this.workshop2Price = 150)
        : (this.workshop2Price = 250);

      this.conferencePrice = this.conferencePrice + this.workshop2Price;

      this.selectedWorkshops.push(workshopTitle);
    } else {
      this.selectedWorkshops.splice(
        this.selectedWorkshops.indexOf(workshopTitle),
        1
      );
      this.conferencePrice = this.conferencePrice - this.workshop2Price;
      this.workshop2Price = undefined;
    }
  }

  getWorkshop3Price($event) {
    let workshopSelected = event.currentTarget as HTMLInputElement;
    let workshopTitle = workshopSelected.value;

    if (this.workshop3) {
      this.activeMember
        ? (this.workshop3Price = 30)
        : (this.workshop3Price = 60);
      this.conferencePrice = this.conferencePrice + this.workshop3Price;
      this.selectedWorkshops.push(workshopTitle);
    } else {
      this.selectedWorkshops.splice(
        this.selectedWorkshops.indexOf(workshopTitle),
        1
      );
      this.conferencePrice = this.conferencePrice - this.workshop3Price;
      this.workshop3Price = undefined;
    }
  }

  getWorkshop4Price($event) {
    let workshopSelected = event.currentTarget as HTMLInputElement;
    let workshopTitle = workshopSelected.value;

    if (this.workshop4) {
      this.activeMember
        ? (this.workshop4Price = 30)
        : (this.workshop4Price = 60);
      this.conferencePrice = this.conferencePrice + this.workshop4Price;
      this.selectedWorkshops.push(workshopTitle);
    } else {
      this.selectedWorkshops.splice(
        this.selectedWorkshops.indexOf(workshopTitle),
        1
      );
      this.conferencePrice = this.conferencePrice - this.workshop4Price;
      this.workshop4Price = undefined;
    }
  }

  getWorkshop5Price($event) {
    let workshopSelected = event.currentTarget as HTMLInputElement;
    let workshopTitle = workshopSelected.value;

    if (this.workshop5) {
      this.activeMember
        ? (this.workshop5Price = 150)
        : (this.workshop5Price = 250);
      this.conferencePrice = this.conferencePrice + this.workshop5Price;
      this.selectedWorkshops.push(workshopTitle);
    } else {
      this.selectedWorkshops.splice(
        this.selectedWorkshops.indexOf(workshopTitle),
        1
      );
      this.conferencePrice = this.conferencePrice - this.workshop5Price;
      this.workshop5Price = undefined;
    }
  }

  processForm() {
    this.user.totalPrice = this.conferencePrice + this.preconferencePrice;
    this.user.workshops = this.selectedWorkshops;
    this.user.preconference = this.selectedPreconference;
    //console.log("mas", this.user);
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
}

interface statusMember {
  payed: boolean;
}
