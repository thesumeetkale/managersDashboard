import { NgModule } from "@angular/core";

import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { LoginPageComponent } from "../login-page/login-page.component";
import { EmployeeListComponent } from "../../ManagerDashboardModule/employee-list/employee-list.component";

import { AuthGuardService as AuthGuard } from "../../services/authGuard/authguard.service";

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent,
  },
  {
    path: "employeelist",
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
