import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class TransmitterService {
  subject = new Subject<any>();

  sendParams(params: any): void {
    this.subject.next(params);
  }

  getParams(): Observable<any> {
    return this.subject.asObservable();
  }
}
