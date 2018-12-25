import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-form-control',
  templateUrl: './single-form-control.component.html',
  styleUrls: ['./single-form-control.component.scss']
})
export class SingleFormControlComponent implements OnInit {

  search = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
