import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { InformacjeComponent } from "./components/informacje/informacje.component";
import { AbstraktyComponent } from "./components/abstrakty/abstrakty.component";
import { ProgramComponent } from "./components/program/program.component";
import { HeaderComponent } from "./components/header/header.component";
import { Router } from "@angular/router";
import { RejestracjaComponent } from "./components/rejestracja/rejestracja.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MapComponent } from "./components/map/map.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { KeynoteSpeakersComponent } from "./components/keynote-speakers/keynote-speakers.component";
import { WykladowcyComponent } from "./components/wykladowcy/wykladowcy.component";
import { EnglishVersionComponent } from "./components/english-version/english-version.component";
import { SliderComponent } from "./components/slider/slider.component";
import { GuestsSliderComponent } from "./components/guests-slider/guests-slider.component";
import { RodoComponent } from "./components/rodo/rodo.component";
import { MeganavComponent } from "./components/meganav/meganav.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { OrganizatorComponent } from "./components/organizator/organizator.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { KontaktComponent } from "./components/kontakt/kontakt.component";
import { EduardoKeeganComponent } from "./components/eduardo-keegan/eduardo-keegan.component";
import { MarkReineckeComponent } from "./components/mark-reinecke/mark-reinecke.component";
import { RobertLeahyComponent } from "./components/robert-leahy/robert-leahy.component";
import { MichaelaSwalesComponent } from "./components/michaela-swales/michaela-swales.component";
import { KomitetyComponent } from "./components/komitety/komitety.component";
import { EnMeganavComponent } from "./components/en-meganav/en-meganav.component";
import { EnHomePageComponent } from "./components/en-home-page/en-home-page.component";
import { EnWykladowcyComponent } from "./components/en-wykladowcy/en-wykladowcy.component";
import { EnEduardoKeeganComponent } from "./components/en-eduardo-keegan/en-eduardo-keegan.component";
import { EnMarkReineckeComponent } from "./components/en-mark-reinecke/en-mark-reinecke.component";
import { EnRobertLeahyComponent } from "./components/en-robert-leahy/en-robert-leahy.component";
import { EnMichaelaSwalesComponent } from "./components/en-michaela-swales/en-michaela-swales.component";
import { CoryNewmanComponent } from "./components/cory-newman/cory-newman.component";
import { EnCoryNewmanComponent } from "./components/en-cory-newman/en-cory-newman.component";
import { EnAbstraktyComponent } from "./components/en-abstrakty/en-abstrakty.component";
import { EnGuestsSliderComponent } from "./components/en-guests-slider/en-guests-slider.component";
import { EnKomitetyComponent } from "./components/en-komitety/en-komitety.component";
import { EnKontaktComponent } from "./components/en-kontakt/en-kontakt.component";
import { EnOrganizatorComponent } from "./components/en-organizator/en-organizator.component";
import { DojazdKomunikacjaComponent } from "./components/dojazd-komunikacja/dojazd-komunikacja.component";
import { EnDojazdKomunikacjaComponent } from "./components/en-dojazd-komunikacja/en-dojazd-komunikacja.component";
import { MobilenavComponent } from "./components/mobilenav/mobilenav.component";
import { EnMobilenavComponent } from "./components/en-mobilenav/en-mobilenav.component";
import { KrakowComponent } from "./components/krakow/krakow.component";
import { EnKrakowComponent } from "./components/en-krakow/en-krakow.component";

const appRoutes: Routes = [
  { path: "home-page", component: HomePageComponent },
  { path: "abstrakty", component: AbstraktyComponent },
  { path: "en-abstrakty", component: EnAbstraktyComponent },
  { path: "organizator", component: OrganizatorComponent },
  { path: "en-organizator", component: EnOrganizatorComponent },
  { path: "program", component: ProgramComponent },
  { path: "keynote-speakers", component: KeynoteSpeakersComponent },
  { path: "wykladowcy", component: WykladowcyComponent },
  { path: "rejestracja-na-konferencje", component: RejestracjaComponent },
  { path: "english-version", component: EnglishVersionComponent },
  { path: "informacje", component: InformacjeComponent },
  { path: "polityka-prywatnosci", component: PrivacyPolicyComponent },
  { path: "kontakt", component: KontaktComponent },
  { path: "en-kontakt", component: EnKontaktComponent },
  { path: "komitety", component: KomitetyComponent },
  { path: "en-komitety", component: EnKomitetyComponent },
  { path: "cory-newman", component: CoryNewmanComponent },
  { path: "en-cory-newman", component: EnCoryNewmanComponent },
  { path: "mark-reinecke", component: MarkReineckeComponent },
  { path: "en-mark-reinecke", component: EnMarkReineckeComponent },
  { path: "eduardo-keegan", component: EduardoKeeganComponent },
  { path: "en-eduardo-keegan", component: EnEduardoKeeganComponent },
  { path: "robert-leahy", component: RobertLeahyComponent },
  { path: "en-robert-leahy", component: EnRobertLeahyComponent },
  { path: "michaela-swales", component: MichaelaSwalesComponent },
  { path: "en-michaela-swales", component: EnMichaelaSwalesComponent },
  { path: "en-home-page", component: EnHomePageComponent },
  { path: "invited-speakers", component: EnWykladowcyComponent },
  { path: "dojazd-komunikacja", component: DojazdKomunikacjaComponent },
  { path: "en-dojazd-komunikacja", component: EnDojazdKomunikacjaComponent },
  { path: "krakow", component: KrakowComponent },
  { path: "en-krakow", component: EnKrakowComponent },
  { path: "", redirectTo: "/home-page", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InformacjeComponent,
    AbstraktyComponent,
    ProgramComponent,
    HeaderComponent,
    RejestracjaComponent,
    FooterComponent,
    MapComponent,
    PageNotFoundComponent,
    KeynoteSpeakersComponent,
    WykladowcyComponent,
    EnglishVersionComponent,
    SliderComponent,
    GuestsSliderComponent,
    RodoComponent,
    MeganavComponent,
    HomePageComponent,
    OrganizatorComponent,
    PrivacyPolicyComponent,
    KontaktComponent,
    EduardoKeeganComponent,
    MarkReineckeComponent,
    RobertLeahyComponent,
    MichaelaSwalesComponent,
    KomitetyComponent,
    EnMeganavComponent,
    EnHomePageComponent,
    EnWykladowcyComponent,
    EnEduardoKeeganComponent,
    EnMarkReineckeComponent,
    EnRobertLeahyComponent,
    EnMichaelaSwalesComponent,
    CoryNewmanComponent,
    EnCoryNewmanComponent,
    EnAbstraktyComponent,
    EnGuestsSliderComponent,
    EnKomitetyComponent,
    EnKontaktComponent,
    EnOrganizatorComponent,
    DojazdKomunikacjaComponent,
    EnDojazdKomunikacjaComponent,
    MobilenavComponent,
    EnMobilenavComponent,
    KrakowComponent,
    EnKrakowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CookieService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
