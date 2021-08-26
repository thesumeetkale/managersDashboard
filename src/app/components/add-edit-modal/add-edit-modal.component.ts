import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeServiceService } from "../../services/employeeService/employee-service.service";

@Component({
  selector: "app-add-edit-modal",
  templateUrl: "./add-edit-modal.component.html",
  styleUrls: ["./add-edit-modal.component.scss"],
})
export class AddEditModalComponent implements OnInit {
  @Input() EmployeeData;
  @Output() closeTheModal: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  employeeForm: FormGroup;
  submitted: boolean;
  edit: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeServiceService
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      birthDate: ["", [Validators.required]],
      mobile: ["", Validators.required],
      city: ["", Validators.required],
    });

    if (this.EmployeeData) {
      this.employeeForm.controls["firstName"].setValue(
        this.EmployeeData.firstName
      );
      this.employeeForm.controls["lastName"].setValue(
        this.EmployeeData.lastName
      );
      this.employeeForm.controls["address"].setValue(this.EmployeeData.address);
      this.employeeForm.controls["mobile"].setValue(this.EmployeeData.mobile);
      this.employeeForm.controls["birthDate"].setValue(
        this.EmployeeData.birthDate
      );
      this.employeeForm.controls["city"].setValue(this.EmployeeData.city);
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.employeeForm.invalid);
    if (!this.employeeForm.invalid) {
      var payload = {
        firstName: this.employeeForm.value.firstName,
        lastName: this.employeeForm.value.lastName,
        address: this.employeeForm.value.address,
        birthDate: this.employeeForm.value.birthDate,
        mobile: this.employeeForm.value.mobile,
        city: this.employeeForm.value.city,
      };
      console.log(payload);

      if (this.edit) {
        let editPayload = {
          ...payload,
          id: this.EmployeeData.id,
        };
        this.employeeService
          .editEmployee(this.EmployeeData.id, editPayload)
          .subscribe((res) => {
            console.log(res);
            this.closeTheModal.emit();
          });
      } else {
        this.employeeService.addEmployee(payload).subscribe((res) => {
          this.closeTheModal.emit();
        });
      }
    }
  }
}
