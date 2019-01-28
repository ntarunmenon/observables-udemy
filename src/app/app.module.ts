import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";
import { CoursesListComponent } from './courses-list/courses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserEventExperimentsComponent,
    CourseDetailComponent,
    EventBusExperimentsComponent,
    LessonsCounterComponent,
    LessonsListComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
