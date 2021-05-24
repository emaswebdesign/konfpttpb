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
import { AgnieszkaPopielComponent } from "./components/agnieszka-popiel/agnieszka-popiel.component";
import { EnAgnieszkaPopielComponent } from "./components/en-agnieszka-popiel/en-agnieszka-popiel.component";
import { EwaPraglowskaComponent } from "./components/ewa-praglowska/ewa-praglowska.component";
import { EnEwaPraglowskaComponent } from "./components/en-ewa-praglowska/en-ewa-praglowska.component";
import { GuestSliderMobileComponent } from "./components/guest-slider-mobile/guest-slider-mobile.component";
import { EnGuestSliderMobileComponent } from "./components/en-guest-slider-mobile/en-guest-slider-mobile.component";
import { AuditoriumMaximumComponent } from "./components/auditorium-maximum/auditorium-maximum.component";
import { EnAuditoriumMaximumComponent } from "./components/en-auditorium-maximum/en-auditorium-maximum.component";
import { InstytutPsychologiiUjComponent } from "./components/instytut-psychologii-uj/instytut-psychologii-uj.component";
import { EnInstytutPsychologiiUjComponent } from "./components/en-instytut-psychologii-uj/en-instytut-psychologii-uj.component";
import { KonferencjaStudenckaComponent } from "./components/konferencja-studencka/konferencja-studencka.component";
import { EnKonferencjaStudenckaComponent } from "./components/en-konferencja-studencka/en-konferencja-studencka.component";
import { EnCennikComponent } from "./components/en-cennik/en-cennik.component";
import { CennikComponent } from "./components/cennik/cennik.component";
import { WieslawJerzyCubalaComponent } from "./components/wieslaw-jerzy-cubala/wieslaw-jerzy-cubala.component";
import { EnWieslawJerzyCubalaComponent } from "./components/en-wieslaw-jerzy-cubala/en-wieslaw-jerzy-cubala.component";
import { WarsztatyComponent } from "./components/warsztaty/warsztaty.component";
import { WorkshopEduardoKeganComponent } from "./components/workshop-eduardo-kegan/workshop-eduardo-kegan.component";
import { WorkshopRobertLeahyComponent } from "./components/workshop-robert-leahy/workshop-robert-leahy.component";
import { WorkshopMalgorzataBielakComponent } from "./components/workshop-malgorzata-bielak/workshop-malgorzata-bielak.component";
import { FrankDatilloComponent } from "./components/frank-datillo/frank-datillo.component";
import { EnFrankDatilloComponent } from "./components/en-frank-datillo/en-frank-datillo.component";
import { WorkshopFrankDatilloComponent } from "./components/workshop-frank-datillo/workshop-frank-datillo.component";
import { WorkshopMichaelaSwalesComponent } from "./components/workshop-michaela-swales/workshop-michaela-swales.component";
import { HubertCzupalaComponent } from "./components/hubert-czupala/hubert-czupala.component";
import { WorkshopHubertCzupalaComponent } from "./components/workshop-hubert-czupala/workshop-hubert-czupala.component";
import { WorkshopCoryNewmanComponent } from "./components/workshop-cory-newman/workshop-cory-newman.component";
import { AnitaBrynskaComponent } from "./components/anita-brynska/anita-brynska.component";
import { NinaSzalasComponent } from "./components/nina-szalas/nina-szalas.component";
import { JacekLegierskiComponent } from "./components/jacek-legierski/jacek-legierski.component";
import { WorkshopJacekLegierskiComponent } from "./components/workshop-jacek-legierski/workshop-jacek-legierski.component";
import { HannaMalinowskaComponent } from "./components/hanna-malinowska/hanna-malinowska.component";
import { AgnieszkaWroczynskaComponent } from "./components/agnieszka-wroczynska/agnieszka-wroczynska.component";
import { WorkshopFrankDattilioSecondComponent } from "./components/workshop-frank-dattilio-second/workshop-frank-dattilio-second.component";
import { WorkshopBrynskaSzalasComponent } from "./components/workshop-brynska-szalas/workshop-brynska-szalas.component";
import { JoahimKowalskiComponent } from "./components/joahim-kowalski/joahim-kowalski.component";
import { WorkshopMalinowskaWroczynskaComponent } from "./components/workshop-malinowska-wroczynska/workshop-malinowska-wroczynska.component";
import { LogosComponent } from "./components/logos/logos.component";
import { AlicjaBaranekComponent } from "./components/alicja-baranek/alicja-baranek.component";
import { WorkshopAlicjaBaranekComponent } from "./components/workshop-alicja-baranek/workshop-alicja-baranek.component";
import { KatarzynaSikoraComponent } from "./components/katarzyna-sikora/katarzyna-sikora.component";
import { WorkshopKatarzynaSikoraComponent } from "./components/workshop-katarzyna-sikora/workshop-katarzyna-sikora.component";
import { PiotrSikoraComponent } from "./components/piotr-sikora/piotr-sikora.component";
import { NataliaLiszewskaComponent } from "./components/natalia-liszewska/natalia-liszewska.component";
import { WorkshopNataliaLiszewskaComponent } from "./components/workshop-natalia-liszewska/workshop-natalia-liszewska.component";
import { WorkshopNinaSzalasComponent } from "./components/workshop-nina-szalas/workshop-nina-szalas.component";
import { TomaszSrebnickiComponent } from "./components/tomasz-srebnicki/tomasz-srebnicki.component";
import { BartoszKleszczComponent } from "./components/bartosz-kleszcz/bartosz-kleszcz.component";
import { WorkshopBartoszKleszczComponent } from "./components/workshop-bartosz-kleszcz/workshop-bartosz-kleszcz.component";
import { MagdalenaMurackaComponent } from "./components/magdalena-muracka/magdalena-muracka.component";
import { WorkshopMagdalenaMurackaComponent } from "./components/workshop-magdalena-muracka/workshop-magdalena-muracka.component";
import { MagdalenaSkuzaComponent } from "./components/magdalena-skuza/magdalena-skuza.component";
import { OlgaOlszewskaComponent } from "./components/olga-olszewska/olga-olszewska.component";
import { WorkshopOlgaOlszewskaComponent } from "./components/workshop-olga-olszewska/workshop-olga-olszewska.component";
import { JoannaSalbertComponent } from "./components/joanna-salbert/joanna-salbert.component";
import { WorkshopJoannaSalbertComponent } from "./components/workshop-joanna-salbert/workshop-joanna-salbert.component";
import { WorkshopMalgorzataBerezaComponent } from "./components/workshop-malgorzata-bereza/workshop-malgorzata-bereza.component";
import { MalgorzataBerezaComponent } from "./components/malgorzata-bereza/malgorzata-bereza.component";
import { WorkshopJoachimKowalskiComponent } from "./components/workshop-joachim-kowalski/workshop-joachim-kowalski.component";
import { DanielPankowskiComponent } from "./components/daniel-pankowski/daniel-pankowski.component";
import { KingaWytrychiewiczComponent } from "./components/kinga-wytrychiewicz/kinga-wytrychiewicz.component";
import { AleksandraAugustynComponent } from "./components/aleksandra-augustyn/aleksandra-augustyn.component";
import { WorkshopAleksandraAugustynComponent } from "./components/workshop-aleksandra-augustyn/workshop-aleksandra-augustyn.component";
import { JoannaSzmydComponent } from "./components/joanna-szmyd/joanna-szmyd.component";
import { CennikTabelaComponent } from "./components/cennik-tabela/cennik-tabela.component";
import { EnCennikTabelaComponent } from "./components/en-cennik-tabela/en-cennik-tabela.component";
import { WorkshopEwaPopielComponent } from "./components/workshop-ewa-popiel/workshop-ewa-popiel.component";
import { BogdanZawadzkiComponent } from "./components/bogdan-zawadzki/bogdan-zawadzki.component";
import { PrzemyslawBabelComponent } from "./components/przemyslaw-babel/przemyslaw-babel.component";
import { EnPrzemyslawBabelComponent } from "./components/en-przemyslaw-babel/en-przemyslaw-babel.component";
import { EnAnitaBrynskaComponent } from "./components/en-anita-brynska/en-anita-brynska.component";
import { EnYonaTeichmanComponent } from "./components/en-yona-teichman/en-yona-teichman.component";
import { HarmonogramComponent } from "./components/harmonogram/harmonogram.component";
import { EnBogdanZawadzkiComponent } from "./components/en-bogdan-zawadzki/en-bogdan-zawadzki.component";
import { YonaTeichmanComponent } from "./components/yona-teichman/yona-teichman.component";
import { EnWarsztatyComponent } from "./components/en-warsztaty/en-warsztaty.component";
import { EnWorkshopReobertLeahyComponent } from "./components/en-workshop-reobert-leahy/en-workshop-reobert-leahy.component";
import { EnWorkshopFrankDatilloComponent } from "./components/en-workshop-frank-datillo/en-workshop-frank-datillo.component";
import { EnWorkshopMichaelaSwalesComponent } from "./components/en-workshop-michaela-swales/en-workshop-michaela-swales.component";
import { EnWorkshopEduardoKeganComponent } from "./components/en-workshop-eduardo-kegan/en-workshop-eduardo-kegan.component";
import { EnWorkshopFrankDatilloSecondComponent } from "./components/en-workshop-frank-datillo-second/en-workshop-frank-datillo-second.component";
import { EnWorkshopCoryNewmanComponent } from "./components/en-workshop-cory-newman/en-workshop-cory-newman.component";
import { MaciejBohenskiComponent } from "./components/maciej-bohenski/maciej-bohenski.component";
import { WorkshopMaciejBochenskiComponent } from "./components/workshop-maciej-bochenski/workshop-maciej-bochenski.component";
import { EnLogosComponent } from "./components/en-logos/en-logos.component";
import { EnInformacjeComponent } from "./components/en-informacje/en-informacje.component";
import { AndrzejKuczmierczykComponent } from "./components/andrzej-kuczmierczyk/andrzej-kuczmierczyk.component";
import { EnAndrzejKuczmierczykComponent } from "./components/en-andrzej-kuczmierczyk/en-andrzej-kuczmierczyk.component";
import { KamilaJakubiakComponent } from "./components/kamila-jakubiak/kamila-jakubiak.component";
import { WorkshopKamilaJakubiakComponent } from "./components/workshop-kamila-jakubiak/workshop-kamila-jakubiak.component";
import { PartnerzyComponent } from "./components/partnerzy/partnerzy.component";
import { EnPartnerzyComponent } from "./components/en-partnerzy/en-partnerzy.component";
import { WorkshopCentrumneuroComponent } from "./components/workshop-centrumneuro/workshop-centrumneuro.component";
import { WorkshopAlanFruzzettiComponent } from "./components/workshop-alan-fruzzetti/workshop-alan-fruzzetti.component";
import { AlanFruzzettiComponent } from "./components/alan-fruzzetti/alan-fruzzetti.component";
import { EnHarmonogramComponent } from "./components/en-harmonogram/en-harmonogram.component";
import { EnAlanFruzzettiComponent } from "./components/en-alan-fruzzetti/en-alan-fruzzetti.component";
import { EnWorkshopAlanFruzzettiComponent } from "./components/en-workshop-alan-fruzzetti/en-workshop-alan-fruzzetti.component";

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
  { path: "en-informacje", component: EnInformacjeComponent },
  { path: "polityka-prywatnosci", component: PrivacyPolicyComponent },
  { path: "kontakt", component: KontaktComponent },
  { path: "en-kontakt", component: EnKontaktComponent },
  { path: "komitety", component: KomitetyComponent },
  { path: "en-komitety", component: EnKomitetyComponent },
  { path: "cory-newman", component: CoryNewmanComponent },
  { path: "en-cory-newman", component: EnCoryNewmanComponent },
  { path: "mark-reinecke", component: MarkReineckeComponent },
  { path: "en-mark-reinecke", component: EnMarkReineckeComponent },
  { path: "wieslaw-jerzy-cubala", component: WieslawJerzyCubalaComponent },
  { path: "en-wieslaw-jerzy-cubala", component: EnWieslawJerzyCubalaComponent },
  { path: "eduardo-keegan", component: EduardoKeeganComponent },
  { path: "en-eduardo-keegan", component: EnEduardoKeeganComponent },
  { path: "robert-leahy", component: RobertLeahyComponent },
  { path: "en-robert-leahy", component: EnRobertLeahyComponent },
  { path: "michaela-swales", component: MichaelaSwalesComponent },
  { path: "en-michaela-swales", component: EnMichaelaSwalesComponent },
  { path: "agnieszka-popiel", component: AgnieszkaPopielComponent },
  { path: "en-agnieszka-popiel", component: EnAgnieszkaPopielComponent },
  { path: "ewa-praglowska", component: EwaPraglowskaComponent },
  { path: "en-ewa-praglowska", component: EnEwaPraglowskaComponent },
  { path: "frank-dattilio", component: FrankDatilloComponent },
  { path: "en-frank-dattilio", component: EnFrankDatilloComponent },
  { path: "en-home-page", component: EnHomePageComponent },
  { path: "invited-speakers", component: EnWykladowcyComponent },
  { path: "dojazd-komunikacja", component: DojazdKomunikacjaComponent },
  { path: "en-dojazd-komunikacja", component: EnDojazdKomunikacjaComponent },
  { path: "krakow", component: KrakowComponent },
  { path: "en-krakow", component: EnKrakowComponent },
  { path: "auditorium-maximum", component: AuditoriumMaximumComponent },
  { path: "en-auditorium-maximum", component: EnAuditoriumMaximumComponent },
  { path: "przemyslaw-babel", component: PrzemyslawBabelComponent },
  { path: "en-przemyslaw-babel", component: EnPrzemyslawBabelComponent },
  { path: "bogdan-zawadzki", component: BogdanZawadzkiComponent },
  { path: "en-bogdan-zawadzki", component: EnBogdanZawadzkiComponent },
  { path: "anita-brynska", component: AnitaBrynskaComponent },
  { path: "en-anita-brynska", component: EnAnitaBrynskaComponent },
  { path: "yona-teichman", component: YonaTeichmanComponent },
  { path: "en-yona-teichman", component: EnYonaTeichmanComponent },
  { path: "harmonogram", component: HarmonogramComponent },
  { path: "en-harmonogram", component: EnHarmonogramComponent },
  { path: "andrzej-kuczmierczyk", component: AndrzejKuczmierczykComponent },
  { path: "alan-fruzzetti", component: AlanFruzzettiComponent },
  { path: "en-alan-fruzzetti", component: EnAlanFruzzettiComponent },

  {
    path: "en-andrzej-kuczmierczyk",
    component: EnAndrzejKuczmierczykComponent,
  },
  {
    path: "instytut-psychologii-uj",
    component: InstytutPsychologiiUjComponent,
  },
  {
    path: "en-instytut-psychologii-uj",
    component: EnInstytutPsychologiiUjComponent,
  },
  { path: "cennik", component: CennikComponent },
  { path: "en-cennik", component: EnCennikComponent },
  { path: "konferencja-studencka", component: KonferencjaStudenckaComponent },
  {
    path: "en-konferencja-studencka",
    component: EnKonferencjaStudenckaComponent,
  },
  { path: "warsztaty", component: WarsztatyComponent },
  { path: "en-warsztaty", component: EnWarsztatyComponent },
  { path: "partnerzy", component: PartnerzyComponent },
  { path: "en-partnerzy", component: EnPartnerzyComponent },
  { path: "", redirectTo: "/home-page", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
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
    EnKrakowComponent,
    AgnieszkaPopielComponent,
    EnAgnieszkaPopielComponent,
    EwaPraglowskaComponent,
    EnEwaPraglowskaComponent,
    GuestSliderMobileComponent,
    EnGuestSliderMobileComponent,
    AuditoriumMaximumComponent,
    EnAuditoriumMaximumComponent,
    InstytutPsychologiiUjComponent,
    EnInstytutPsychologiiUjComponent,
    KonferencjaStudenckaComponent,
    EnKonferencjaStudenckaComponent,
    EnCennikComponent,
    CennikComponent,
    WieslawJerzyCubalaComponent,
    EnWieslawJerzyCubalaComponent,
    WarsztatyComponent,
    WorkshopEduardoKeganComponent,
    WorkshopRobertLeahyComponent,
    WorkshopMalgorzataBielakComponent,
    FrankDatilloComponent,
    EnFrankDatilloComponent,
    WorkshopFrankDatilloComponent,
    WorkshopMichaelaSwalesComponent,
    HubertCzupalaComponent,
    WorkshopHubertCzupalaComponent,
    WorkshopCoryNewmanComponent,
    AnitaBrynskaComponent,
    NinaSzalasComponent,
    JacekLegierskiComponent,
    WorkshopJacekLegierskiComponent,
    HannaMalinowskaComponent,
    AgnieszkaWroczynskaComponent,
    WorkshopFrankDattilioSecondComponent,
    WorkshopBrynskaSzalasComponent,
    JoahimKowalskiComponent,
    WorkshopMalinowskaWroczynskaComponent,
    LogosComponent,
    AlicjaBaranekComponent,
    WorkshopAlicjaBaranekComponent,
    KatarzynaSikoraComponent,
    WorkshopKatarzynaSikoraComponent,
    PiotrSikoraComponent,
    NataliaLiszewskaComponent,
    WorkshopNataliaLiszewskaComponent,
    WorkshopNinaSzalasComponent,
    TomaszSrebnickiComponent,
    BartoszKleszczComponent,
    WorkshopBartoszKleszczComponent,
    MagdalenaMurackaComponent,
    WorkshopMagdalenaMurackaComponent,
    MagdalenaSkuzaComponent,
    OlgaOlszewskaComponent,
    WorkshopOlgaOlszewskaComponent,
    JoannaSalbertComponent,
    WorkshopJoannaSalbertComponent,
    WorkshopMalgorzataBerezaComponent,
    MalgorzataBerezaComponent,
    WorkshopJoachimKowalskiComponent,
    DanielPankowskiComponent,
    KingaWytrychiewiczComponent,
    AleksandraAugustynComponent,
    WorkshopAleksandraAugustynComponent,
    JoannaSzmydComponent,
    CennikTabelaComponent,
    EnCennikTabelaComponent,
    WorkshopEwaPopielComponent,
    BogdanZawadzkiComponent,
    PrzemyslawBabelComponent,
    EnPrzemyslawBabelComponent,
    EnAnitaBrynskaComponent,
    EnYonaTeichmanComponent,
    HarmonogramComponent,
    EnBogdanZawadzkiComponent,
    YonaTeichmanComponent,
    EnWarsztatyComponent,
    EnWorkshopReobertLeahyComponent,
    EnWorkshopFrankDatilloComponent,
    EnWorkshopMichaelaSwalesComponent,
    EnWorkshopEduardoKeganComponent,
    EnWorkshopFrankDatilloSecondComponent,
    EnWorkshopCoryNewmanComponent,
    MaciejBohenskiComponent,
    WorkshopMaciejBochenskiComponent,
    EnLogosComponent,
    EnInformacjeComponent,
    AndrzejKuczmierczykComponent,
    EnAndrzejKuczmierczykComponent,
    KamilaJakubiakComponent,
    WorkshopKamilaJakubiakComponent,
    PartnerzyComponent,
    EnPartnerzyComponent,
    WorkshopCentrumneuroComponent,
    WorkshopAlanFruzzettiComponent,
    AlanFruzzettiComponent,
    EnHarmonogramComponent,
    EnAlanFruzzettiComponent,
    EnWorkshopAlanFruzzettiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CookieService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
