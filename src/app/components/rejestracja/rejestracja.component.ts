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

interface IWorkshop {
  regularPrice: number;
  membersPrice: number;
  title: string;
  author?: string;
  value?: string;
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
  totalPrice = 900;
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
  selectedWorkshops: IWorkshop[] = [];
  selectedPreconferenceWorkshop: IWorkshop;

  preconference: IWorkshop[] = [
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
      title:
        "Conceptualising and treating high- risk and complexity: What does DBT have to offer"
    },
    { regularPrice: 0, membersPrice: 0, title: "Nie chcę brać udziału" }
  ];

  workshop1Details: IWorkshop = {
    value: "workshop1",
    author: "Eduardo Keegan",
    title: "Just do it! Dealing with procrastination",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop2Details: IWorkshop = {
    value: "workshop2",
    author: "Frank Datillo",
    title: "CBT with families",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop3Details: IWorkshop = {
    value: "workshop3",
    author: "Małgorzata Bielak",
    title: "Praca z trybami w narcystycznym zaburzeniu osobowości",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop4Details: IWorkshop = {
    value: "workshop4",
    author: "Hubert Czupała",
    title:
      "Process-based CBT, czyli jak ewoluowały interwencje emocjonalne, poznawcze i behawioralne pod wpływem rozwoju badań nad kluczowymi procesami psychologicznej elastyczności",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop5Details: IWorkshop = {
    value: "workshop5",
    author: "Mark Reinicke",
    title: "CBT with angry and oppositional youth",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop6Details: IWorkshop = {
    value: "workshop6",
    author: "Agnieszka Popiel, Ewa Pragłowska",
    title:
      "Skuteczne działanie w stresie – poznawczo-behawioralny program profilaktyki",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop7Details: IWorkshop = {
    value: "workshop7",
    author: "Hanna Malinowska - Wikaryjczyk, Agnieszka Wroczyńska",
    title:
      "Wystarczająco dobrze naprawdę wystarczy - transdiagnostyczne podejście do terapii perfekcjonizmu",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop8Details: IWorkshop = {
    value: "workshop8",
    author: "Cory Newan",
    title:
      "Treating Bipolar Disorder with CBT and Family-Focused Interventions",
    regularPrice: 250,
    membersPrice: 150
  };

  workshop9Details: IWorkshop = {
    value: "workshop9",
    author: "Anita Bryńska, Nina Szalas",
    title:
      "Terapia poznawczo-behawioralna zaburzeń związanych z zaburzeniem obsesyjno-kompulsyjnym (dysmorfofobia, zespół zbieractwa, trichotillomania)",
    regularPrice: 60,
    membersPrice: 30
  };

  workshop10Details: IWorkshop = {
    value: "workshop10",
    author: "Jacek Legierski, Joachim Kowalski",
    title: "Kluczowe techniki terapii metapoznawczej",
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

  updatePrice(): void {
    this.conferencePrice = this.getBasePrice() + this.getWorkshopsPrice();
    this.totalPrice = this.getPrice();
  }

  getBasePrice(): number {
    if (this.activeMember) {
      return 750;
    } else {
      return 900;
    }
  }

  getPreconferenceWorkshopPrice(): number {
    if (this.selectedPreconferenceWorkshop) {
      if (this.activeMember) {
        return this.selectedPreconferenceWorkshop.membersPrice;
      } else {
        return this.selectedPreconferenceWorkshop.regularPrice;
      }
    } else {
      return 0;
    }
  }

  getWorkshopsPrice(): number {
    const prices = this.selectedWorkshops.map(workshop => {
      if (this.activeMember) {
        return workshop.membersPrice;
      } else {
        return workshop.regularPrice;
      }
    });
    return prices.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  }

  getPrice(): number {
    return (
      this.getBasePrice() +
      this.getPreconferenceWorkshopPrice() +
      this.getWorkshopsPrice()
    );
  }

  onPreconferenceWorkshopChange(workshop: IWorkshop): void {
    this.selectedPreconferenceWorkshop = workshop;
    this.updatePrice();
  }

  onWorkshopChange(workshop: IWorkshop): void {
    const index = this.selectedWorkshops.indexOf(workshop);
    if (index > -1) {
      this.selectedWorkshops.splice(index, 1);
    } else {
      this.selectedWorkshops.push(workshop);
    }
    this.updatePrice();
  }

  processForm() {
    this.user.totalPrice = this.getPrice();
    this.user.workshops = this.selectedWorkshops
      .map(workshop => workshop.title)
      .filter(i => !!i);
    this.user.preconference =
      this.selectedPreconferenceWorkshop &&
      this.selectedPreconferenceWorkshop.title;
    console.log("mas", this.user);
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
