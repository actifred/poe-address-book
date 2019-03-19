import { Component, OnInit } from '@angular/core';
import { User, UserName } from '../models/user';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private _userManager: UserManagerService) { 
    // this.users = [];
    // let utilisateur = new User();
    // utilisateur.name = new UserName();
    // utilisateur.name.first = 'John';
    // utilisateur.name.last = 'Lennon';
    // this.users.push(utilisateur);
  }

  onButtonClick() {
    this.users = this._userManager.getUserList();
  }

  ngOnInit() {
  }

}
