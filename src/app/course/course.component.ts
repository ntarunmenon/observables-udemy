import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Course } from '../shared/model/course';
import { CoursehttpService } from '../services/coursehttp.service';
import { LessonsPagerService } from '../services/lessons-pager.service';
import { Lesson } from '../shared/model/lesson';
import { filter } from 'rxjs/operators';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[LessonsPagerService]
})
export class CourseComponent implements OnInit,OnDestroy {
  

  @Input()
  id:number;

  course$:Observable<Course>;
  lesson$:Observable<Lesson[]>;

  detail$:Observable<Lesson>;
  
  constructor(private coursesService:CoursehttpService,
    private lessonsPagerService:LessonsPagerService,
    private messageService:MessagesService) { }

  ngOnInit() {
    this.course$ = this.coursesService.findCourseById(this.id).
    pipe(
      filter(data => data != null)
    );
    this.lesson$ = this.lessonsPagerService.lessonsPage$;
    this.lesson$.subscribe(
      () => {},
      () => this.messageService.errors('error loadin page')
    )
  

    this.lessonsPagerService.loadFirstPage(this.id);
  }

  nextLessonsPage(){
    this.lessonsPagerService.loadNextPage()
    .subscribe(
      () => {},
      () => this.messageService.errors('error loadin next page')
    )
  }

  previousLessonsPage(){
    this.lessonsPagerService.loadPreviousPage()
    .subscribe(
      () => {},
      () => this.messageService.errors('error loadin pevious page')
    )
  }

  selectDetail(lesson:Lesson){
    this.detail$ = this.coursesService.findLessonDetailById(lesson.url)
  }

  backToMaster(){
    this.detail$ = undefined;
  }

  ngOnDestroy(): void {
    console.log('Destroying');
  }

}
