import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formReactive: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: [''],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', Validators.email],
      address: this.fb.group({
        street: [''],
        city: ['', Validators.maxLength(10)],
        streetNumber: ['']
      }),
      password: [''],
      confirmPassword: [''],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });

    this.formReactive.controls.firstName.setValue('sdasd');

    // this.formReactive.valueChanges.subscribe(() => console.log(this.formReactive.value));

    this.formReactive.patchValue({
      firstName: 'firstName',
      lastName: 'last'
    });
  }

  submit() {
    console.log(this.formReactive.value);
  }

  addAlias() {
    this.aliases.push(this.fb.control('', [Validators.maxLength(10), Validators.required]));
  }

  get aliases() {
    return this.formReactive.get('aliases') as FormArray;
  }

  get firstName() {
    return this.formReactive.get('firstName') as FormControl;
  }

}
