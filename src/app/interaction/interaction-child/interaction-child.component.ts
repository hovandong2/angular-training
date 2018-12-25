import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { InteractionService } from './../../core/service/interaction.service';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.scss']
})
export class InteractionChildComponent implements OnInit {

  @Input('id') id: number;
  @Output('go') go = new EventEmitter<number>();

  constructor(
    private interaction: InteractionService
  ) { }

  ngOnInit() {
    console.log(this.id);
  }

  goTo(id: number) {
    this.go.emit(id);
  }

  openGift(data: boolean) {
    this.interaction.send(data);
  }

}
