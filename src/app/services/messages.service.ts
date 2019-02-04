import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private errorSubject:Subject<string[]> = new BehaviorSubject([]);
  errors$:Observable<string[]> = this.errorSubject.asObservable();

  constructor() { }

  errors(...errorMessages:string[]){
    this.errorSubject.next(errorMessages);
  }
}
