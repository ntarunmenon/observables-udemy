import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
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

  course$:Observable<Course>;
  lessons$:Observable<Lesson[]>;
  constructor(private route: ActivatedRoute, 
    private coursesService: CoursesService,
    private newsLetterService:NewsletterService,
    private userService:UserService) {
  
  }

  ngOnInit() {
    this.course$ = this.route.params
            .pipe(
              switchMap(params => this.coursesService.findCourseByUrl(params['id']))
            );

    this.lessons$ = this.course$.pipe(
      switchMap(course => this.coursesService.findLessonsForCourse(course.id))
    );
  }
}
