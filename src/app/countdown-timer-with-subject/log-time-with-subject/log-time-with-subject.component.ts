import { Component, OnInit } from '@angular/core';
import { CountdownTimerWithSubjectService } from '../countdown-timer-with-subject.service';

@Component({
  selector: 'app-log-time-with-subject',
  templateUrl: './log-time-with-subject.component.html',
  styleUrls: ['./log-time-with-subject.component.scss']
})
export class LogTimeWithSubjectComponent implements OnInit {

  logList:any = [];

  constructor(private countdownTimerWithSubjectService:CountdownTimerWithSubjectService) { }

  ngOnInit(): void {
    this.countdownTimerWithSubjectService.timerLog.subscribe((data:any) => {
      this.logList = data;
    });
  }

}
