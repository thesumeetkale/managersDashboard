import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from "../navbar/navbar.component";
import { AddEditModalComponent } from "../add-edit-modal/add-edit-modal.component";
import { TableDataComponent } from "../table-data/table-data.component";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    NavbarComponent,
    AddEditModalComponent,
    TableDataComponent,
    DeleteModalComponent,
  ],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    AddEditModalComponent,
    TableDataComponent,
    DeleteModalComponent,
  ],
})
export class ComponentsModuleModule {}
