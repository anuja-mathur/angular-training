import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsRecordService {
  studentMarksApi = 'https://hub.dummyapis.com/vj/nnsHSKq';

  constructor(private http:HttpClient) { }

  getMarks(): Observable<any> {
    return this.http.get<any>(
      this.studentMarksApi, { observe: 'response' });
  }
}
