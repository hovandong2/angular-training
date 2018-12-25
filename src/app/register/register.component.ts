import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.registerForm = fb.group({
      firstName:  [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: ['']
      }),
      passwork: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit() {
  }

  register(form: FormGroup) {
    console.log(this.registerForm);
  }

}
