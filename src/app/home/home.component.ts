import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoggerService } from '../core/service/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _routes: ActivatedRoute,
    private _logger: LoggerService
  ) { }

  ngOnInit() {
    // this._logger.warn('asad');
    this._routes.params.subscribe(data => console.log(data));
  }

}
