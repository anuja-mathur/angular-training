import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, HostListener} from '@angular/core';

@Component({
  selector: 'app-dynamic-blocks',
  templateUrl: './dynamic-blocks.component.html',
  styleUrls: ['./dynamic-blocks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicBlocksComponent implements OnInit {
  @ViewChild('blockParent', {static: true}) el!:ElementRef;
  elementIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) scrollHandler(event:any) {
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;
    let colCount = Math.floor(this.el.nativeElement.offsetWidth/200);

    if (offset >= height) {
      for(let i=0; i<colCount; i++) {
        this.addBlocks();
      }
    }
  }

  addBlocks() {
    this.elementIndex++;
    let block = `
      <div class="col-auto block-col mt-4">
        <div class="block">
          <button class="btn btn-success" onclick="alert('Element ${this.elementIndex} is clicked!')">Click Me!</button>
        </div>
      </div>
    `;
    this.el.nativeElement.insertAdjacentHTML('beforeend', block);
  }

}
