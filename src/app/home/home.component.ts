import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import {AngularFireDatabase} from '@angular/fire/database';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  courses: Course[];
  latestLessons: Lesson[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    this.db.list<Course[]>('courses')
    .valueChanges()
    .pipe(
      tap(console.log)
    )
    .subscribe(
        data => this.courses = data
    );

this.db.list<Lesson[]>('lessons', ref => ref.orderByKey().limitToLast(10))
    .valueChanges()
    .pipe(
      tap(console.log)
    )
    .subscribe(
        data => this.latestLessons = data
    );
  }
}
