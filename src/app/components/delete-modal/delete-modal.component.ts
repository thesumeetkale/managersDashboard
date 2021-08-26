import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"],
})
export class DeleteModalComponent implements OnInit {
  @Output() closeTheModal: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
  @Output() deleteEmployee: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}
}
