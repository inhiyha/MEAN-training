import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  userList:User[] = [];

  constructor(private service:Http) { }

  getUserList():any {
    return this.service.get('https://jsonplaceholder.typicode.com/users').map(res=>res.json());
  }

}
