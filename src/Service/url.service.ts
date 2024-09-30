import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
   
ApiUrl = 'http://103.71.99.94:8023/api';// 103 server  
ApiUrl1='http://103.71.99.94:2605/api'

public login = this.ApiUrl + '/authenticate/authenticateUser';
public AdminLogin = this.ApiUrl + '/Login/AdminLogin';
public clientLogo= this.ApiUrl1 + '/authenticate/getlogo';

}
