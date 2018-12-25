import { Component, OnInit } from '@angular/core';

import { InteractionService } from './../core/service/interaction.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  contentId = 1;

  constructor(
    private interaction: InteractionService
  ) { }

  ngOnInit() {
    this.interaction.send(false);
  }

  showContent(id: number) {
    this.contentId = id;
  }

  getIdFromChild(id: number) {
    this.contentId = id;
    console.log(id);
  }

}
