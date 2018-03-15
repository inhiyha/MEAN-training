import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookServiceService {

  bookList:Book[] = [];

  constructor(private service:Http) { }

  getBookList():any{
    return this.service.get('http://localhost:3000/server/getBooks').map(res=>res.json());
    // this.bookList.push({name:"Introduction to Java",author:"Inhiyha"});
    // this.bookList.push({name:"Testing Basics",author:"Saranya"});
    // return this.bookList;
  }

}
