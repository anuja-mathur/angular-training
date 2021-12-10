import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-time',
  templateUrl: './log-time.component.html',
  styleUrls: ['./log-time.component.scss']
})
export class LogTimeComponent implements OnInit {
  @Input() logList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
