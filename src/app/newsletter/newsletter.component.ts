import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../services/user.service';
import { NewsletterService } from '../services/newsletter.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {
  
    firstName$:Observable<string>;

    constructor(private userService:UserService,
        private newsLetterService:NewsletterService) {

    }

    ngOnInit(): void {
       this.firstName$ = this.userService.user$.
       pipe(map(user => user.firstName));
    }

    subscribeToNewsletter(email) {
        this.newsLetterService.subscribeToNewsletter(email)
          .subscribe(() => {
            email.value = '';
            alert('Subscription Succesfull');
          }),
          console.error;
      }




}