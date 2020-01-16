import { Component } from "@angular/core";

@Component({
  selector: "app-mobilenav",
  templateUrl: "./mobilenav.component.html",
  styleUrls: ["./mobilenav.component.css"]
})
export class MobilenavComponent {
  versionEn: boolean = false;

  changeLanguage() {
    return (this.versionEn = !this.versionEn);
  }
}
