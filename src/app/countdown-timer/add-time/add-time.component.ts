import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.scss'],
})
export class AddTimeComponent implements OnInit {
  @Output() timerAdded:EventEmitter<any> = new EventEmitter();
  timer:number = 0;
  @Output() timerStatus:EventEmitter<any> = new EventEmitter();
  timerRunning:boolean = false;

  @Input() logList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.timerAdded.emit(this.timer);
    this.timerRunning = !this.timerRunning;
    this.timerStatus.emit(this.timerRunning);
  }

  resetTimer() {
    this.timer = 0;
    this.timerAdded.emit(this.timer);
    this.timerRunning = false;
    this.timerStatus.emit(this.timerRunning);
  }

}
