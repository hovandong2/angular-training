import { Component, OnInit } from '@angular/core';
import { throwError,  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService, ENDPOINT } from '../core/service/api.service';
import { LoggerService } from '../core/service/logger.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    token: '',
    iamge: ''
  };

  constructor(
    private _api: ApiService,
    private _logger: LoggerService
  ) { }

  ngOnInit() {
    this._logger.log('asdas');
    // this._api.getApi();

    // this._api.getPromise('')
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));

    // const dt = {
    //     'name': 'morpheus',
    //     'job': 'leader'
    // };
    // this._api.post('user', dt).subscribe(log => console.log(log));

    // this.user.email = 'asdad';

    // this._api.getNews('assets/news.json').subscribe(data => console.log(data));

    this._api.getConfigResponse(ENDPOINT.users).subscribe(data => console.log(data));
    this._api.getPromise(ENDPOINT.users).then(data => console.log(data));
  }

}
