import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  // @Input() defaultColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('appHighLight') highlightColor: string;

  ngOnInit() {
    // console.log(this.highlightColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.highlightColor);
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
