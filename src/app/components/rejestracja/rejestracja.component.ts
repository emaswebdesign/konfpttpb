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
  workshopString: string;
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
  styleUrls: ["./rejestracja.component.css"],
})
export class RejestracjaComponent implements OnInit {
  user: User;
  activeMember: boolean = false;
  secondStep: boolean = false;
  formSubmited: boolean = false;
  conferencePrice: number = 750;
  totalPrice = 750;
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
  workshop7: boolean;
  workshop7Price: number;
  selectedWorkshops: IWorkshop[] = [];
  selectedPreconferenceWorkshop: IWorkshop;

  preconference: IWorkshop[] = [
    {
      regularPrice: 300,
      membersPrice: 200,
      author: "Alan Fruzzetti",
      title: "DBT with couples",
    },
    {
      regularPrice: 300,
      membersPrice: 200,
      author: "Robert Leahy",
      title: "Emotional schema therapy",
    },
    {
      regularPrice: 300,
      membersPrice: 200,
      author: "Cory Newan",
      title:
        "Treating Bipolar Disorder with CBT and Family-Focused Interventions",
    },
    {
      regularPrice: 0,
      membersPrice: 0,
      title: "Nie chcę brać udziału",
    },
  ];

  workshop1Details: IWorkshop = {
    value: "workshop1",
    author: "Eduardo Keegan",
    title: "Just do it! Dealing with procrastination",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop2Details: IWorkshop = {
    value: "workshop2",
    author: "Maciej Bocheński",
    title:
      "Gdy przychodzi pismo z sądu. Czyli praktyczny kurs dla pracowników ochrony zdrowia psychicznego  jak postępować w kontaktach z organami wymiaru sprawiedliwości",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop3Details: IWorkshop = {
    value: "workshop3",
    author: "Hubert Czupała",
    title:
      "Process-based CBT, czyli jak ewoluowały interwencje emocjonalne, poznawcze i behawioralne pod wpływem rozwoju badań nad kluczowymi procesami psychologicznej elastyczności",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop4Details: IWorkshop = {
    value: "workshop4",
    author: "Mark Reinicke",
    title: "CBT with angry and oppositional youth",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop5Details: IWorkshop = {
    value: "workshop5",
    author: "Agnieszka Popiel, Ewa Pragłowska",
    title:
      "Skuteczne działanie w stresie – poznawczo-behawioralny program profilaktyki",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop6Details: IWorkshop = {
    value: "workshop6",
    author: "Hanna Malinowska - Wikaryjczyk, Agnieszka Wroczyńska",
    title:
      "Wystarczająco dobrze naprawdę wystarczy - transdiagnostyczne podejście do terapii perfekcjonizmu",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop7Details: IWorkshop = {
    value: "workshop7",
    author: "Zespół Centrum Neurorehabilitacji im. Z.J. Dziurkowskich",
    title: "Grupowa Poznawczo-Behawioralna Terapia w praktyce",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop8Details: IWorkshop = {
    value: "workshop8",
    author: "Kamila Jakubiak-Leńczuk",
    title: "Zastosowanie Mindfulness w psychoterapii partnerskiej ",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop9Details: IWorkshop = {
    value: "workshop9",
    author: "Jacek Legierski, Joachim Kowalski",
    title: "Kluczowe techniki terapii metapoznawczej",
    regularPrice: 80,
    membersPrice: 50,
  };

  workshop10Details: IWorkshop = {
    value: "workshop10",
    author: "Aleksandra Augustyn, Joanna Szmyd",
    title:
      "Terapia poznawczo - behawioralna zaburzeń snu oraz rytmu okołodobowego u nastolatków i młodych dorosłych (16-21 r. ż.) ",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop11Details: IWorkshop = {
    value: "workshop11",
    author: "Małgorzata Bereza – Stanisławska",
    title:
      "Wykorzystanie technik terapii poznawczo-behawioralnej w psychoonkologii dzieci i młodzieży",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop12Details: IWorkshop = {
    value: "workshop12",
    author: "Joanna Salbert",
    title:
      "Terapia strukturalna w praktyce terapeuty poznawczo- behawioralnego",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop13Details: IWorkshop = {
    value: "workshop13",
    author: "Olga Olszewska",
    title:
      "Wyjść z klatki. Praktyczne zastosowanie dialogu motywującego w empatycznej konfrontacji w terapii schematów",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop14Details: IWorkshop = {
    value: "workshop14",
    author: "Magdalena Muracka-Tylko, Magdalena Skuza-Singh",
    title:
      "Familly Connections (FC) – grupowy program wsparcia dla bliskich osób z dysregulacją emocji i zaburzeniem osobowości z pogranicza",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop15Details: IWorkshop = {
    value: "workshop15",
    author: "Natalia Liszewska",
    title:
      "Poznawczo-behawioralna psychoterapia osób po doświadczeniach przemocy ze strony partnera",
    regularPrice: 0,
    membersPrice: 0,
  };

  workshop16Details: IWorkshop = {
    value: "workshop16",
    author: "Alicja Baranek",
    title:
      "DBT w praktyce terapeuty poznawczo-behawioralnego – podobieństwa i różnice z CBT, włączanie grupowego treningu umiejętności",
    regularPrice: 0,
    membersPrice: 0,
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
      workshops: [],
      workshopString: "",
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
      return 600;
    } else {
      return 750;
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
    const prices = this.selectedWorkshops.map((workshop) => {
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
      .map((workshop) => workshop.title)
      .filter((i) => !!i);
    this.user.workshopString = this.user.workshops.join(", ");
    this.user.preconference =
      this.selectedPreconferenceWorkshop &&
      this.selectedPreconferenceWorkshop.title;
    this.user.contributionPayed = this.activeMember;
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
