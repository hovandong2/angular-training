import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { LoggerService } from './logger.service';

export const DOMAIN_API = environment.api;
export const ENDPOINT = {
  users: 'users',
  register: 'register'
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient,
    private _logger: LoggerService
  ) { }

  getPromise(url: string) {
    return this.http.get(DOMAIN_API + url).pipe(
      catchError(this.handleError),
    ).toPromise();
  }

  getConsole(): Observable<any> {
    return of([3, 2, 2]);
  }

  getNews(path: string) {
    return this.http.get(path);
  }

  getApi() {
    this._logger.addClass = 'david';
    // this._logger.log('Waiting...');
    // setTimeout(() => {
    //   this._logger.error('Request errror');
    // }, 2000);
  }

  /**
   * Get api with full response
   * @param url : string
   */
  getConfigResponse(url: string): Observable<HttpResponse<any>> {
    return this.http.get(DOMAIN_API + url, {observe: 'response'});
  }

  /**
   * Get api with handle error
   * @param url : string
   */
  get(url: string): Observable<any> {
    return this.http.get(DOMAIN_API + url)
      .pipe(
        // retry(3), retry if error (rxjs)
        catchError(this.handleError)
      );
  }

  getFileContent(fileName: string) {
    return this.http.get(fileName, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.log(error),
        )
      );
  }

  /**
   * Send data to server
   */
  post(url: string, data: any): Observable<any> {
    return this.http.post(DOMAIN_API + url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
