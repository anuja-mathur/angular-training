import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { DisplayTimeComponent } from './countdown-timer/display-time/display-time.component';
import { AddTimeComponent } from './countdown-timer/add-time/add-time.component';
import { LogTimeComponent } from './countdown-timer/log-time/log-time.component';
import { ClickCountComponent } from './countdown-timer/click-count/click-count.component';
import { CountdownTimerWithSubjectComponent } from './countdown-timer-with-subject/countdown-timer-with-subject.component';
import { AddTimeWithSubjectComponent } from './countdown-timer-with-subject/add-time-with-subject/add-time-with-subject.component';
import { DisplayTimeWithSubjectComponent } from './countdown-timer-with-subject/display-time-with-subject/display-time-with-subject.component';
import { LogTimeWithSubjectComponent } from './countdown-timer-with-subject/log-time-with-subject/log-time-with-subject.component';
import { ClickCountWithSubjectComponent } from './countdown-timer-with-subject/click-count-with-subject/click-count-with-subject.component';
import { StudentsRecordComponent } from './students-record/students-record.component';
import { DynamicBlocksComponent } from './dynamic-blocks/dynamic-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductsComponent,
    ProductsDetailComponent,
    CountdownTimerComponent,
    DisplayTimeComponent,
    AddTimeComponent,
    LogTimeComponent,
    ClickCountComponent,
    CountdownTimerWithSubjectComponent,
    AddTimeWithSubjectComponent,
    DisplayTimeWithSubjectComponent,
    LogTimeWithSubjectComponent,
    ClickCountWithSubjectComponent,
    StudentsRecordComponent,
    DynamicBlocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
