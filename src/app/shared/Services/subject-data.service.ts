import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectDataService {

  constructor() { }
  public subject = new BehaviorSubject<number>(0);
  public subjectName = new BehaviorSubject<string>('');

 cartCount(res) {
   return this.subject.next(res);
  }
  updateName(res) {
    return this.subjectName.next(res);
   }
}
