import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]> = of(['Testing 123']);
  constructor(private messageService:MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messageService.errors$;
  }

  close(){
    this.messageService.errors();
  }

}
