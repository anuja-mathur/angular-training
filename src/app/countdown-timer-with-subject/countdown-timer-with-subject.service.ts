import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerWithSubjectService {
  timerAdded:any = new Subject();
  timerLog:any = new Subject();
  timer:number = 0;

  constructor() { }

  setData(data:any) {
    this.timerAdded.next(data);
  }
}
