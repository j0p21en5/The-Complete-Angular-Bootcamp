import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() updateDataEvent = new EventEmitter<string>();
  @Output() updateData2Event = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
