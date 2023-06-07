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

  createRequest = (
    method: string,
    url: string
    // options?: {
    //   body?: any;
    //   headers?:
    //     | HttpHeaders
    //     | {
    //         [header: string]: string | string[];
    //       };
    //   context?: HttpContext;
    //   observe?: 'body';
    //   params?:
    //     | HttpParams
    //     | {
    //         [param: string]:
    //           | string
    //           | number
    //           | boolean
    //           | ReadonlyArray<string | number | boolean>;
    //       };
    //   reportProgress?: boolean;
    //   responseType: 'arraybuffer';
    //   withCredentials?: boolean;
    // }
  ): Observable<any> => {
    return this.http
      .request(method, url)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  };
}
