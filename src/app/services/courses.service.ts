import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Course } from '../shared/model/course';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Lesson } from '../shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses():Observable<Course[]>{
    return this.db.list<Course[]>('courses')
    .valueChanges()
    .pipe(
      tap(console.log)
    );
  }

  findLatestLessons():Observable<Lesson[]>{
    return this.db.list<Lesson[]>('lessons', ref => ref.orderByKey().limitToLast(10))
    .valueChanges()
    .pipe(
      tap(console.log)
    )
  }

  findCourseByUrl(courseUrl:string):Observable<Course> {
     return this.db
          .list('courses', 
              ref => ref.orderByChild('url').equalTo(courseUrl))
          .snapshotChanges()
          .pipe(
            map(data => data[0]),
            map(data => <Course>{
              id: data.payload.key,
              ...data.payload.val()
            })
          );
  }

  findLessonsForCourse(courseId:string) : Observable<Lesson[]>{
    return this.db
    .list<Lesson>('lessons',
      ref => ref.orderByChild('courseId').equalTo(courseId))
    .valueChanges();
  }
}
