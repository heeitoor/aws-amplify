import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ts-amplify";

  constructor() {
    console.log({ subdomain: this.getSubdomain() });
  }

  getSubdomain = () => {
    const domain = window.location.hostname;
    let subdomain = "";
    if (
      domain.indexOf(".") < 0 ||
      domain.split(".")[0] === "portal" ||
      domain.split(".")[0] === "dev" ||
      domain.split(".")[0] === "dashboard"
    ) {
      subdomain = "";
    } else {
      subdomain = domain.split(".")[0];
    }
    return subdomain;
  };
}
