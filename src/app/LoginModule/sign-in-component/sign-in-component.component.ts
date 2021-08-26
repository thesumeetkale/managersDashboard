import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "../../services/authService/auth-service.service";

@Component({
  selector: "app-sign-in-component",
  templateUrl: "./sign-in-component.component.html",
  styleUrls: ["./sign-in-component.component.scss"],
})
export class SignInComponentComponent implements OnInit {
  @Output() showSignUpDiv: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  signInForm: FormGroup;
  submitted: boolean;
  errorMessage: boolean;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signInForm.controls;
  }

  onSubmit() {
    this.errorMessage = false;
    this.error = "";
    this.submitted = true;
    if (!this.signInForm.invalid) {
      let payload = this.signInForm.value.email;

      this.auth.userLogin(payload).subscribe((res) => {
        if (res.length > 0) {
          if (res[0].password == this.signInForm.value.password) {
            let userInf0 = {
              firstName: res[0].firstName,
              lastName: res[0].lastName,
              email: res[0].email,
            };
            localStorage.setItem("user", JSON.stringify(userInf0));

            this.router.navigate(["employeelist"]);
          } else {
            this.errorMessage = true;
            this.error = "Your password is incorrect";
          }
        } else {
          this.errorMessage = true;
          this.error =
            "Your Email is not registered. Please Sign Up and then login.";
        }
      });
    }
  }
}
