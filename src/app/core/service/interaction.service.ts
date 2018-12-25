import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // Observable string sources
  private sendSource = new Subject<any>();

  getSource$ = this.sendSource.asObservable();

  constructor() { }

  send(data: any) {
    this.sendSource.next(data);
  }

}
