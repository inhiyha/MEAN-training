import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book';
import {BookServiceService} from '../books/book-service.service';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css'],
  providers:[BookServiceService]
})
export class RightPaneComponent implements OnInit {

  bookList:Book[];

  constructor(private bs:BookServiceService) { 
    
  }

  ngOnInit() {
    this.bs.getBookList().subscribe(list => { this.bookList = list.data});
    console.log(this.bookList);
  }

}
