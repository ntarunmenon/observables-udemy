import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursehttpService {

  constructor(private httpClient:HttpClient) { }

  findCourseById(courseId:number) {
    return this.httpClient.get<Course>(`api/courses/${courseId}`);
  }

  findLessonDetailById(lessonId):Observable<Lesson> {
    return this.httpClient.get<Lesson>(`api/lessons/${lessonId}`);
  }
}
