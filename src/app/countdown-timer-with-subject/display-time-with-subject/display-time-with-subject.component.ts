import { Component, OnInit } from '@angular/core';
import { CountdownTimerWithSubjectService } from '../countdown-timer-with-subject.service';

@Component({
  selector: 'app-display-time-with-subject',
  templateUrl: './display-time-with-subject.component.html',
  styleUrls: ['./display-time-with-subject.component.scss']
})
export class DisplayTimeWithSubjectComponent implements OnInit {
  timer:number = 0;
  timerRunning:boolean = false;
  timeInterval:any;
  timeList:any = [];

  constructor(private countdownTimerWithSubjectService: CountdownTimerWithSubjectService) { }

  ngOnInit(): void {
    this.countdownTimerWithSubjectService.timerAdded.subscribe((data:any) => {
      this.timer = data[0];
      this.timerRunning = data[1];

      this.startTimer();
    },
    (error:any) => console.log('error', error),
    () => {
      console.log(this.timer);
    });
  }

  startTimer() {
    let status = '';
    if(this.timerRunning) { // Start
      status = 'Started';
      this.timeInterval = setInterval(() => {
        if(this.timer <= 0) return;
        this.timer--;
        this.countdownTimerWithSubjectService.timer = this.timer;
      }, 1000);
    }
    else { // Pause
      status = 'Paused';
      clearInterval(this.timeInterval);
      this.timerRunning = true;
    }

    // Log Time
    if(this.timer > 0) {
      let date = new Date();
      
      this.timeList.push({
        'status': status,
        'count': this.timer,
        'date': new Date()
      });
    }
    this.countdownTimerWithSubjectService.timerLog.next(this.timeList);
  }

}
