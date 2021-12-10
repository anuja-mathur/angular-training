import { Component, OnInit } from '@angular/core';
import { StudentsRecordService } from './students-record.service';

@Component({
  selector: 'app-students-record',
  templateUrl: './students-record.component.html',
  styleUrls: ['./students-record.component.scss']
})
export class StudentsRecordComponent implements OnInit {
  studentsRecord:any = [];
  studentsRecordKey:any = [];
 
  constructor(private studentsRecordService: StudentsRecordService) {
    this.getStudentsRecord();
  }

  ngOnInit(): void {
  }

  getStudentsRecord() {
    this.studentsRecordService.getMarks()
      .subscribe(
        (data) => {
          Object.entries(data.body[0]).forEach(item => {
            this.studentsRecord.push(item[1]);
          });
        }
      )
  }

  sortData(el:any) {
    let sortType = el.getAttribute('sortType');
    let key = el.innerText.toLowerCase();
    
    switch (sortType) {
      case "asc":
        {
          el.setAttribute('sortType', 'desc');
          this.studentsRecord = this.studentsRecord.sort((a:any, b:any) => a.marks[key] - b.marks[key]);
          break;
        }
      case "desc":
        {
          el.setAttribute('sortType','');
          this.studentsRecord = this.studentsRecord.sort((a:any, b:any) => b.marks[key] - a.marks[key]);
          break;
        }
      default :
        {
          el.setAttribute('sortType','asc');
          this.studentsRecord = this.studentsRecord.sort((a:any, b:any) => a.id - b.id);
          break;
        }
    }
  } 
}
