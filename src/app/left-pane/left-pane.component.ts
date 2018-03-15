import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {

  @Input('page') page: string;
  @Output() onLinkClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changePage(page:string) {
    this.onLinkClicked.emit(page);
    this.page = page;
  }

}
