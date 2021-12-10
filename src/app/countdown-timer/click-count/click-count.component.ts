import { Component, OnInit, Input, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit {
  @Input() logList:any = [];
  startedCount:number = 0;
  pausedCount:number = 0;
  iterableDiffer:any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.logList);
    if (changes) {
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
    }
  }

}
