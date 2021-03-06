import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagerService } from '../user-manager.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  currentUserId: number;
  currentUser: User;

  routeSub: Subscription;

  formulaire;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _userManager: UserManagerService,
    private _fb: FormBuilder
  ) { 
    this.routeSub = this._activatedRoute.params.subscribe((resultat) => {
      this.currentUserId = resultat.userid;
      this.currentUser = this._userManager.getUser(this.currentUserId);
    }
    );
  }

  ngOnInit() {
    this.formulaire = this._fb.group({
      firstname: this._fb.control(this.currentUser.name.first, [Validators.required]),
      lastname: this._fb.control(this.currentUser.name.last, [this.auMoins3Caracteres]),
      email: this._fb.control(this.currentUser.email, [])
    });
  }

  auMoins3Caracteres(controle) {
    if (controle.value.length>3) {
      if (controle.value.length<10)
        return null;
      else
      return { 
        troplong: true 
      };
    } else {
      return { 
        tropcourt: true 
      };
    }
  }

  modifieUtilisateur() {
    this.currentUser.name.first = this.formulaire.get('firstname').value;
    this.currentUser.name.last = this.formulaire.get('lastname').value;
    this.currentUser.email = this.formulaire.get('email').value;
    this._userManager.updateUser(this.currentUser);
    this._router.navigate(['/user', this.currentUserId]);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
