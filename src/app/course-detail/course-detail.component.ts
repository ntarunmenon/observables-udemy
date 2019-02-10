import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap, tap, flatMap } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { NewsletterService } from '../services/newsletter.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
 
  course$: Observable<Course>;
  lessons$:Observable<Lesson[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('inside here');
     const observableD:Observable<[Course, (Lesson[])]> = this.route.snapshot.data["detail"];
    this.course$ = observableD.pipe(
      map(data => data[0])
    );

    this.lessons$ = observableD.pipe(
      map(data => data[1])
    );
  }
}
