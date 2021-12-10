import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.scss']
})
export class DisplayTimeComponent implements OnInit {
  @Input() timer:number = 0;
  @Input() timerRunning: boolean = false;
  @Output() timerLog:EventEmitter<any> = new EventEmitter();
  timeInterval:any;
  timeList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let status = '';
    if(this.timerRunning) { // Start
      status = 'Started';
      this.timeInterval = setInterval(() => {
        if(this.timer <= 0) return;
        this.timer--;
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
    this.timerLog.emit(this.timeList);
  }
}
