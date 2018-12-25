import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.scss']
})
export class AfterContentChildComponent implements OnInit, AfterContentInit {

  color = 'red';

  toogleContent = false;

  constructor(
    // private
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.toogleContent = !this.toogleContent;
  }

  ngAfterContentInit() {
  }

}
