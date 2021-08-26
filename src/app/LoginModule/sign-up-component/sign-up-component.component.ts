import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthServiceService } from "../../services/authService/auth-service.service";

@Component({
  selector: "app-sign-up-component",
  templateUrl: "./sign-up-component.component.html",
  styleUrls: ["./sign-up-component.component.scss"],
})
export class SignUpComponentComponent implements OnInit {
  @Output() showSignInDiv: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  signUpForm: FormGroup;
  submitted: boolean;
  showError: boolean;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private login: AuthServiceService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      birthDate: ["", [Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_])[A-Za-zd$@$!%*?&].{8,}$"
          ),
        ],
      ],
      confirmPassword: ["", Validators.required],
    });

    this.showError = false;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.showError = false;
    this.submitted = true;
    if (!this.signUpForm.invalid) {
      if (
        this.signUpForm.value.password == this.signUpForm.value.confirmPassword
      ) {
        this.login.userLogin(this.signUpForm.value.email).subscribe((res) => {
          if (res.length == 0) {
            let payload = {
              firstName: this.signUpForm.value.firstName,
              lastName: this.signUpForm.value.lastName,
              email: this.signUpForm.value.email,
              address: this.signUpForm.value.address,
              birthDate: this.signUpForm.value.birthDate,
              password: this.signUpForm.value.password,
            };

            this.login.registerUser(payload).subscribe((res) => {
              this.showSignInDiv.emit();
            });
          } else {
            this.showError = true;
            this.errorMessage = "Email already present";
          }
        });
      } else {
        this.showError = true;
        this.errorMessage = "Your password & confirm password do not match.";
      }
    }
  }
}
