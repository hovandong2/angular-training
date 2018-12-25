import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBtnLoad]'
})
export class BtnLoadDirective implements OnInit {

  loading: boolean;
  elNative = this.el.nativeElement;
  txt = this.elNative.textContent;

  constructor(
    private el: ElementRef
  ) { }

  @Input('load')
  set load(value: boolean) {
    this.loading = value;
    console.log(value);
    if (!event) {
      console.log('ok');
      this.elNative.textContent = this.txt;
    }
  }

  ngOnInit() {
    // this.elNative = this.el.nativeElement;
    // this.txt = this.elNative.textContent;
  }

  @HostListener('click') click() {
    // For style
    // if (elNative.style.color) {
    //   elNative.style.color = null;
    // } else {
    //   elNative.style.color = 'red';
    // }

    if (this.loading) {
      this.elNative.textContent = 'loading...';
    }
  }

}
