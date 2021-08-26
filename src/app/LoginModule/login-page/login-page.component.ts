import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  signUpDiv: boolean;
  signInDiv: boolean;
  heading: string;

  constructor() {}

  ngOnInit() {
    this.showSignUpDiv();
  }

  showSignUpDiv() {
    this.signUpDiv = true;
    this.signInDiv = false;
    this.heading = "Sign Up";
  }

  showSignInDiv() {
    this.signUpDiv = false;
    this.signInDiv = true;
    this.heading = "Sign In";
  }
}
