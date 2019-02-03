import { Component, OnInit } from '@angular/core';
import { UserService, UNKOWN_USER } from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  isLoggedIn$:Observable<boolean>;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = 
      this.userService.user$.
      pipe(
      map(user => user !== UNKOWN_USER)
      );
  }

}
