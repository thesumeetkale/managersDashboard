import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from "../navbar/navbar.component";
import { AddEditModalComponent } from "../add-edit-modal/add-edit-modal.component";
import { TableDataComponent } from "../table-data/table-data.component";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";
import { ViewEmployeeDetailsComponent } from "../view-employee-details/view-employee-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalculateAgePipe } from "src/app/pipes/calculate-age.pipe";

@NgModule({
  declarations: [
    NavbarComponent,
    AddEditModalComponent,
    TableDataComponent,
    DeleteModalComponent,
    ViewEmployeeDetailsComponent,
    CalculateAgePipe,
  ],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    AddEditModalComponent,
    TableDataComponent,
    DeleteModalComponent,
    ViewEmployeeDetailsComponent,
  ],
})
export class ComponentsModuleModule {}
