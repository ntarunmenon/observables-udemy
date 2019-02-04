import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Lesson } from '../shared/model/lesson';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, tap, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonsPagerService {

  private static readonly PAGE_SIZE=2;

  private subject = new BehaviorSubject<Lesson[]>([]);

  currentPage = 1;
  private courseId:number;

  lessonsPage$: Observable<Lesson[]> = this.subject.asObservable();

  constructor(private httpClient:HttpClient) { }

  loadFirstPage(id: number): Observable<any> {
    this.courseId = id;
    this.currentPage = 1;
    return this.getPaginatedLessons();
  }

  loadNextPage() : Observable<any>{
    this.currentPage = this.currentPage + 1;
    return this.getPaginatedLessons();
  }

  loadPreviousPage(): Observable<any> {
    this.currentPage = this.currentPage - 1;
    return this.getPaginatedLessons();
  }

  private getPaginatedLessons() {
   return this.httpClient.get<Lesson[]>('/api/lessons', { params: this.httpsParams() })
      .pipe(map(data => data["payload"]),
      tap(data => this.subject.next(data),
      shareReplay()));
  }

  private httpsParams(): HttpParams {
    return new HttpParams()
      .set("courseId", String(this.courseId))
      .set("pageNumber", String(this.currentPage))
      .set("pageSize", String(LessonsPagerService.PAGE_SIZE));
  }
}
