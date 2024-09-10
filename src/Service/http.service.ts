import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private Common: CommonService,private router: Router) {}
 
  postnew(url: string, inputData: any, headers?: HttpHeaders) {
    if (!headers) headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer ' + localStorage.getItem('APITOKEN'));
    // ${this.getTokenType()} ${this.getToken()}
    // this.comman.encryptPayload(inputData,1)
 
    return new Promise((resolve, reject) => {
      this.http
        .post(url, inputData, { headers: headers })
        .pipe(catchError(this.handleError))
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (error) => {
            // this.Common.hideLoader(false);
            if(error.status == 401){
              // this.toastrService.error("Session Expired")
              this.router.navigate(["/login"])
            }
            reject(error);
          },
        });
    });
  }
 
  postUser(url: string, inputData: any, headers?: HttpHeaders) {
    if (!headers) headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer ' + localStorage.getItem('USERAPITOKEN'));
    // ${this.getTokenType()} ${this.getToken()}
    // this.comman.encryptPayload(inputData,1)
 
    return new Promise((resolve, reject) => {
      this.http
        .post(url, inputData, { headers: headers })
        .pipe(catchError(this.handleError))
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (error) => {
            // this.Common.hideLoader(false);
            if(error.status == 401){
              // this.toastrService.error("Session Expired")
              this.router.navigate(["/otplogin"])
            }
            reject(error);
          },
        });
    });
  }
 
  postLogin(url: string, inputData: any, headers?: HttpHeaders) {
    if (!headers) headers = new HttpHeaders();
 
    headers = headers.set('Authorization', ``);
    // ${this.getTokenType()} ${this.getToken()}
    // this.comman.encryptPayload(inputData,1)
    return new Promise((resolve, reject) => {
      this.http
        .post(url, inputData, { headers: headers })
        .pipe(catchError(this.handleError))
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (error) => {
            // this.Common.hideLoader(false);
            reject(error);
          },
        });
    });
  }
 
  private handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // this.logger.error(error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // this.logger.error(`Backend returned code ${error.status}, ` +
      //   `body was: ${error.message}`);
    }
    // return an ErrorObservable with a user-facing error message
    //return ErrorObservable.create(error);
    return throwError(error);
  }
}
