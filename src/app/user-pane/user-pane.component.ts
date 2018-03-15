import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserServiceService } from '../users/user-service.service';

@Component({
  selector: 'app-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.css'],
  providers:[UserServiceService]
})
export class UserPaneComponent implements OnInit {

  userList:User[] = [];

  constructor(private UserService:UserServiceService) { }

  ngOnInit() {
    this.UserService.getUserList().subscribe(list => { this.userList = list});
  }

}
