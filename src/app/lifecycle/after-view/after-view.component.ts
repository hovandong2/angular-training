import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { AfterViewChildComponent } from './after-view-child/after-view-child.component';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent implements OnInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @ViewChild(AfterViewChildComponent) child: AfterViewChildComponent;
  @ViewChild('anotherChild') anotherChild: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.child.passData);
    console.log(this.anotherChild.nativeElement);
    const a = this.anotherChild.nativeElement;
    console.log(a.classList);
  }

  ngAfterViewChecked() {
    console.log(this.child.passData);
    console.log(this.child.newData);
  }

  ngAfterContentInit() {
    console.log('content init');
  }

  ngAfterContentChecked() {
    console.log('content ckecked');
  }

}
