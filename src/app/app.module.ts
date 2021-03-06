import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AlterncasePipe } from './alterncase.pipe';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Route[] = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/:userid',
    component: UserDetailsComponent
  },
  {
    path: 'user/:userid/edit',
    component: UserFormComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    AlterncasePipe,
    HomeComponent,
    UserDetailsComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
