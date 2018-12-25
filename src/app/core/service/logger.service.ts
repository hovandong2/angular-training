import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  newClass = '';

  constructor() { }

  log(msg: any) {
    console.log(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }

  set addClass(cls: string) {
    this.newClass = cls;
  }

  get addClass() {
    return this.newClass;
  }

}
