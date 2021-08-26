import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-view-employee-details",
  templateUrl: "./view-employee-details.component.html",
  styleUrls: ["./view-employee-details.component.scss"],
})
export class ViewEmployeeDetailsComponent implements OnInit {
  @Input() EmployeeData;
  @Output() closeTheModal: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}
}
