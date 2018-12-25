import { Component, OnInit, AfterViewChecked, AfterContentChecked, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent implements OnInit, AfterViewChecked, AfterContentChecked, DoCheck, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  action() {
  }

  ngAfterViewChecked() {
    console.log('ok');
  }

  ngAfterContentChecked() {
    console.log('content');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('ok');
  }

}
