import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, ENDPOINT } from '../core/service/api.service';
import { map, catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolve implements Resolve<any> {

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.api.get(ENDPOINT.users).pipe(
      delay(4000),
      map(data => data)
    );
  }
}
