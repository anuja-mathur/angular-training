import { Component, OnInit } from '@angular/core';
import { CountdownTimerWithSubjectService } from '../countdown-timer-with-subject.service';

@Component({
  selector: 'app-click-count-with-subject',
  templateUrl: './click-count-with-subject.component.html',
  styleUrls: ['./click-count-with-subject.component.scss']
})
export class ClickCountWithSubjectComponent implements OnInit {
  logList:any = [];
  startedCount:number = 0;
  pausedCount:number = 0;
  iterableDiffer:any;

  constructor(private countdownTimerWithSubjectService: CountdownTimerWithSubjectService) { }

  ngOnInit(): void {
    this.countdownTimerWithSubjectService.timerLog.subscribe((data:any) => {
      this.logList = data;
      this.startedCount = 0;
      this.pausedCount = 0;
      this.logList.map((item:any) => {
        if(item.status == "Started") {
          this.startedCount++;
        }
        else if(item.status == "Paused") {
          this.pausedCount++;
        }
      });
    });
  }

}
