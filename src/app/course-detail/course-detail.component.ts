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
 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.route
  }
}
