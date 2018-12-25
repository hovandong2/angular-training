import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  btnLoad = true;

  badges = [
    {
      id: 1,
      name: 'badges 1'
    },
    {
      id: 2,
      name: 'badges 2'
    },
    {
      id: 3,
      name: 'badges 3'
    },
    {
      id: 4,
      name: 'badges 4'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.btnLoad = true;
    setTimeout(() => {
      this.btnLoad = false;
    }, 2000);
  }

  trackByFn(index: any, item: any) {
    return item.id;
  }

  addNew() {
    const newe = [{
      id: 1,
      name: 'badges 1'
    },
    {
      id: 2,
      name: 'badges 2'
    },
    {
      id: 7,
      name: 'badges 7'
    },
    {
      id: 3,
      name: 'badges 3'
    },
    {
      id: 4,
      name: 'badges 4'
    }, {id: 5, name: 'badges 5'}];
    this.badges = newe;
  }

  remove() {
    this.badges.splice(1, 1);
  }
}
