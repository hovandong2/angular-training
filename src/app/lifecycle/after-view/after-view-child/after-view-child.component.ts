import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styleUrls: ['./after-view-child.component.scss']
})
export class AfterViewChildComponent implements OnInit {

  passData = 'alo';
  newData = 1;

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.newData += 1;
  }

}
