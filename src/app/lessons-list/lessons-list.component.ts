import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Lesson} from "../shared/model/lesson";
import * as _ from 'lodash';
import {store} from "../event-bus-experiments/app-data";
import {Observer} from 'rxjs';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
    

    @Input()
    lessons: Lesson[];

    @Output()
    selected = new EventEmitter<Lesson>();

    ngOnInit(): void {
    }

    select(lesson:Lesson){
        this.selected.next(lesson);
    }

  

}

