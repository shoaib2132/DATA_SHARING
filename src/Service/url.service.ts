import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
   
ApiUrl = 'http://103.71.99.94:8023/api';// 103 server  
public AdminLogin = this.ApiUrl + '/Login/AdminLogin';
}
