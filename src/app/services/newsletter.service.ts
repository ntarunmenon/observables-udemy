import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http:Http) { }

    subscribeToNewsletter(email: string): Observable<any> {
        return this.http.post('/api/newsletter', {email});
    }
}
