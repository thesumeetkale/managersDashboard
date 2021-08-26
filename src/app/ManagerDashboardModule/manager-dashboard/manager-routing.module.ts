import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { EmployeeListComponent } from "../employee-list/employee-list.component";

import { AuthGuardService as AuthGuard } from "../../services/authGuard/authguard.service";

const routes: Routes = [
  { path: "", component: EmployeeListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
