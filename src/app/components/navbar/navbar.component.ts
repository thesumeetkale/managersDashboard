import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit() {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      this.name = userInfo["firstName"] + " " + userInfo["lastName"];
    }
  }

  logOut() {
    localStorage.removeItem("user");
    location.reload();
  }
}
