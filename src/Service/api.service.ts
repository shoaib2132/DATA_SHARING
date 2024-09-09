import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient,private router: Router) { }
  interval:any
  timeLeft:any
  
  getApiPath(address: any) {
    return address;
  }

  post(url: string, data: any) {
    clearInterval(this.interval)
    this.timeLeft=localStorage.getItem("IDEL_TIME")
     this.startTimer()
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem("token","");
    }
 
    return new Promise((resolve, reject) => {
      return this.http.post(url, data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        });
    });
  }

  fileUpload(url: string, data:any) {
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem("token","");
    }

    return new Promise((resolve, reject) => {
      return this.http.post(url, data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        });
    });
  }

  get(url: any) {
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem("token","");
    }

    return new Promise((resolve, reject) => {
      return this.http.get(url, { observe: 'response', headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
       
          if (data.body)
            resolve(data.body);
          else
            resolve(data);
        },
        error => {
          if (error && error.status == 401) {
         
          }
          reject(error)
        }
      )
    })
  }

  delete(url: any) {
    return new Promise((resolve, reject) => {
      return this.http.delete(url, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    })
  }

  put(url: any,data: any) {
    return new Promise((resolve, reject) => {
      return this.http.put(url, data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    })
  }
  
  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft=localStorage.getItem("IDEL_TIME");
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      else {
        localStorage.clear();
    this.router.navigate([`/login`]);
    clearInterval(this.interval)
  
      }
    },1000)
  }

}
