import { Injectable } from '@angular/core';
import { Observable,of, BehaviorSubject } from 'rxjs';
import { User } from '../shared/model/user';
import { Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private subject = new BehaviorSubject(UNKOWN_USER);

  user$:Observable<User> = this.subject.asObservable();

  constructor(private http:HttpClient) { }

  login(email: string, password: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
   return this.http.post<User>('/api/login',{email,password},httpOptions)
   .pipe(
    tap(user => this.subject.next(user)),
    shareReplay()
   )
  }
}


export const UNKOWN_USER: User = {
  firstName: 'Unknown'
}