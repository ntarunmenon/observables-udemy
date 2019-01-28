import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course:Course;
  lessons:Lesson[];
  constructor(private route: ActivatedRoute, 
    private coursesService: CoursesService,
    private newsLetterService:NewsletterService) {
    route.params
      .subscribe(params => {
        const courseUrl = params['id'];

      this.coursesService.findCourseByUrl(courseUrl)
          .subscribe(course => {
            this.course = course;
            this.coursesService.findLessonsForCourse(this.course.id)
            .subscribe(lessons => this.lessons = lessons);
          });
      });
  }

  ngOnInit() {
  }

  onSubscribe(email:string) {
    this.newsLetterService.subscribeToNewsletter(email)
      .subscribe(() => {
        alert('Subscription Succesfull');
      }),
      console.error;
  }

}
