import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Course } from "../shared/model/course";
import { Lesson } from "../shared/model/lesson";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "../services/courses.service";
import { switchMap, map, tap, first } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CourseDetailResover implements Resolve<Promise<Observable<[Course, (Lesson[])]>>>  {

    constructor(private coursesService: CoursesService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<Observable<[Course, (Lesson[])]>> {
            const routerObservable =   this.coursesService.findCourseByUrl(route.params['id'])
            .pipe(
                switchMap(
                    course => this.coursesService.findLessonsForCourse(course.id)
                        .pipe(
                            map<Lesson[], [Course, Lesson[]]>(lessons => [course, lessons]),
                        )
                )
            );

            return new Promise((resolve,reject) => {
                routerObservable.pipe(
                    first()
                ).subscribe((data) => {
                    console.log(data)
                    resolve(routerObservable)});
            })
    }
}