import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  handleSuccess = (res: object) => res;

  handleError = (error: HttpErrorResponse) => {
    console.error(
      'Something bad happened; please try again later.',
      error.status,
      error.error
    );

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  };

  createRequest = (method: string, url: string): Observable<any> => {
    return this.http
      .request(method, url)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  };
}
