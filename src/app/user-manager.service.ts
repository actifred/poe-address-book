import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  private _users : User[];

  constructor(private _httpClient: HttpClient) { 
    this._httpClient
      .get('https://randomuser.me/api/?results=10&gender=female')
      .subscribe( (resultat) => {
        this._users = resultat['results'];
      } );
  }

  public getUserList() {
    return this._users;
  }
}
