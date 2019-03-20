import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManagerService } from '../user-manager.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  currentUserId: number;
  currentUser: User;

  routeSub: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userManager: UserManagerService
  ) { 
    this.routeSub = this._activatedRoute.params.subscribe((resultat) => {
      this.currentUserId = resultat.userid;
      this.currentUser = this._userManager.getUser(this.currentUserId);
    }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
