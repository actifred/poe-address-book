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
      .get('https://randomuser.me/api/?results=100')
      .subscribe( (resultat) => {
        this._users = resultat['results'];
        for (let i=0; i<this._users.length; i++) {
          this._users[i].id = i;
        }
      } );
  }

  public getUserList() {
    return this._users;
  }

  public getUser(id: number) {
    return this._users[id];
  }

  public getUserMatchingSearchInName(chaine: string) {
    return this._users.filter(
      (user: User) => {
        if (user.name.last.indexOf(chaine) > -1) {
          return true;
        }
      }
    );
  }
}
