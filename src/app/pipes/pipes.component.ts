import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  birthday = new Date(2018, 3, 15);

  pipeJson = [
    {
      name: 'Pipe 1'
    },
    {
      name: 'Pipe 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
