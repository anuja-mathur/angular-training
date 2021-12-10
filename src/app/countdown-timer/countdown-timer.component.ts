import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  parentTimer:number = 0;
  parentTimerStatus:boolean = false;
  parentTimerPaused:any = [];
  parentTimerLog:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
