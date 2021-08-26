import { Component, OnInit } from "@angular/core";

import { EmployeeServiceService } from "../../services/employeeService/employee-service.service";

import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    public employeeService: EmployeeServiceService,
    private modalService: NgbModal
  ) {}

  employeesData = [];
  tableHeading = [
    "#",
    "First Name",
    "Last Name",
    "Address",
    "Birth Date",
    "Mobile",
    "City",
    "View",
    "Edit",
    "Delete",
  ];

  closeModal: string;
  ngOnInit() {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.employeeService.getAllEmployees().subscribe((data: any) => {
      this.employeesData = data;
    });
  }

  openAddEmployeeModal() {
    // const modalRef = this.modalService.open(AddEditModalComponent);
  }

  triggerModal(content) {
    this.modalService.open(content).result.then(
      (res) => {
        this.closeModal = `Closed with: ${res}`;
      },
      (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  closeTheModal() {
    this.modalService.dismissAll();
    this.getEmployeesData();
  }
}
