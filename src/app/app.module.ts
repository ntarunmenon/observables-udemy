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
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserEventExperimentsComponent,
    CourseDetailComponent,
    EventBusExperimentsComponent,
    LessonsCounterComponent,
    LessonsListComponent,
    CoursesListComponent,
    CourseDetailHeaderComponent,
    NewsletterComponent,
    LoginComponent,
    TopMenuComponent,
    AllLessonsComponent,
    CourseComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    MessagesComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig,{ enableTracing: false }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
