import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-rodo",
  templateUrl: "./rodo.component.html",
  styleUrls: ["./rodo.component.css"]
})
export class RodoComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  showBar: boolean;
  cookieValue: string;

  ngOnInit() {
    this.cookieValue = this.cookieService.get("RODO_accepted");
    if (this.cookieValue) {
      this.showBar = false;
    } else {
      this.showBar = true;
    }
  }

  hideBar() {
    this.cookieService.set("RODO_accepted", "true");
    this.showBar = false;
  }
}
