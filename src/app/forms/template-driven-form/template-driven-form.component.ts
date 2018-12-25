import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  user = 'sad';
  password: string;

  constructor() { }

  ngOnInit() {
  }

  submit(f: NgForm) {
    console.log(f.value);
  }

  alo(f: NgForm) {
    // console.log(this.user);
    // console.log(this.password);
    // console.log(f);
  }

}
