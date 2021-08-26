import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";

import { ManagerDashboardModule } from "../../ManagerDashboardModule/manager-dashboard/manager-dashboard.module";

import { LoginPageComponent } from "../login-page/login-page.component";
import { SignInComponentComponent } from "../sign-in-component/sign-in-component.component";
import { SignUpComponentComponent } from "../sign-up-component/sign-up-component.component";

import { AuthServiceService } from "../../services/authService/auth-service.service";

@NgModule({
  declarations: [
    LoginPageComponent,
    SignInComponentComponent,
    SignUpComponentComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerDashboardModule,
  ],
  exports: [
    LoginPageComponent,
    SignInComponentComponent,
    SignUpComponentComponent,
  ],
  providers: [AuthServiceService],
})
export class LoginModuleModule {}
