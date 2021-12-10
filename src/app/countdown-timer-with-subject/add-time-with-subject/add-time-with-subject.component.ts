import { Component, OnInit } from '@angular/core';
import { CountdownTimerWithSubjectService } from '../countdown-timer-with-subject.service';

@Component({
  selector: 'app-add-time-with-subject',
  templateUrl: './add-time-with-subject.component.html',
  styleUrls: ['./add-time-with-subject.component.scss']
})
export class AddTimeWithSubjectComponent implements OnInit {
  timer:number = 0;
  timerRunning:boolean = false;
  logList:any = [];

  constructor(private countdownTimerWithSubjectService:CountdownTimerWithSubjectService) { }

  ngOnInit(): void {
    this.countdownTimerWithSubjectService.timerLog.subscribe((data:any) => {
      this.logList = data;
    });
  }

  onInputChange(event:any) {
    this.countdownTimerWithSubjectService.timer = this.timer;
  }

  startTimer() {
    this.timerRunning = !this.timerRunning;
    this.countdownTimerWithSubjectService.setData([this.countdownTimerWithSubjectService.timer, this.timerRunning]);
  }

  resetTimer() {
    this.timer = 0;
    this.timerRunning = false;
    this.countdownTimerWithSubjectService.setData([this.timer, this.timerRunning]);
  }

}
