import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges, OnDestroy {

  @Input() hero: any;
  @Input() getValue: any;

  @Output() log = new EventEmitter<any>();


  constructor(
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routes.paramMap.subscribe(data => console.log(data));
    this.routes.queryParamMap.subscribe(data => console.log(data));
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  back() {
    this.router.navigate(['/news']);
  }

  ngOnDestroy() {
    console.log('news detail destroy');
  }

  send2Parent() {
    this.log.emit('Child send data');
  }

}
