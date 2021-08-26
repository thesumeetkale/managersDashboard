import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManagerRoutingModule } from "./manager-routing.module";
import { ComponentsModuleModule } from "../../components/components-module/components-module.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { EmployeeListComponent } from "../employee-list/employee-list.component";

import { EmployeeServiceService } from "../../services/employeeService/employee-service.service";

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ComponentsModuleModule,
    NgbModule,
  ],
  exports: [EmployeeListComponent],
  providers: [EmployeeServiceService],
})
export class ManagerDashboardModule {}
