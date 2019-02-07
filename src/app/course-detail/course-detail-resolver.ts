import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "../services/courses.service";
import { switchMap, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class CourseDetailResover implements Resolve<[Course,(Lesson[])]>  {

    constructor(private coursesService:CoursesService){}

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):Observable<[Course,(Lesson[])]> {
        return this.coursesService.findCourseByUrl(route.params['id'])
            .pipe(
            switchMap(
             course => this.coursesService.findLessonsForCourse(course.id)
             .pipe(map((course,lessons) => [course,lessons]))
            )
            );
    }
}