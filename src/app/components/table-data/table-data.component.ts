import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

import { EmployeeServiceService } from "../../services/employeeServicE/employee-service.service";

import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-table-data",
  templateUrl: "./table-data.component.html",
  styleUrls: ["./table-data.component.scss"],
})
export class TableDataComponent implements OnInit {
  @Input() employeesData;
  @Input() tableHeading;
  @Output() getEmployeesData: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
  @Output() triggerModal: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  closeModal: string;
  EmployeeData: any;

  constructor(
    private employeeService: EmployeeServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    console.log(this.employeesData);
  }

  openDeletePopup(content, row) {
    this.EmployeeData = row;
    console.log(row);
    this.modalService.open(content).result.then(
      (res) => {},
      (res) => {}
    );
  }

  openEditPopup(content, row) {
    this.EmployeeData = row;
    this.modalService.open(content).result.then(
      (res) => {},
      (res) => {}
    );
  }

  closeTheModal() {
    this.modalService.dismissAll();
    this.getEmployeesData.emit();
  }

  deleteEmployee() {
    this.employeeService
      .deleteEmployee(this.EmployeeData.id)
      .subscribe((res: any) => {
        this.closeTheModal();
        this.getEmployeesData.emit();
      });
  }
}
