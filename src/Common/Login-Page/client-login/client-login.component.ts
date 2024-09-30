import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../Service/shared.service';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../Service/api.service';
import { UrlService } from '../../../Service/url.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-login',
  standalone: true,
  imports: [InputTextModule, CommonModule,FormsModule ],
  templateUrl: './client-login.component.html',
  styleUrl: './client-login.component.css'
})
export class ClientLoginComponent {
  test: any = "../../../assets/Images/Common-Image/tataplay_logo.png"
  ImageView: boolean = false;
  ImageView1: boolean = false;
  RouterUrl: any;
  bankName: string | null = null;
  logo:any;
  EMAIL_ID:any;
  Password:any;
  constructor(private router: Router, public SharedService: SharedService, private ActivatedRoute: ActivatedRoute,private urlService: UrlService,private apiService:ApiService ) {
  }
  ngOnInit() {
    this.RouterUrl = this.ActivatedRoute.url;
    this.ActivatedRoute.params.subscribe(params => {
      this.bankName = params['bankName'];
      console.log('bankName ->', this.bankName)
      this.getlogo()
    });
  }

  forgetPasswordFun() {
    this.router.navigate(['/user/forgetpassword']);
  }
  getlogo() {
    let data={"CLIENT_CODE": this.bankName}
    this.apiService.post(`${this.urlService.clientLogo}`,data).then((res:any)=>{
     // console.log('res',res);
     let Image =  res.MSG.replace('data:image/;base64,', '')
     this.logo = 'data:image/png;base64,' + Image
     //this.logo=res.MSG;
     console.log(this.logo);
      
    })
  }

  login(){
    let data={
      "EMAIL_ID":this.EMAIL_ID,
      "Password":this.Password
    }
    this.apiService.post(`${this.urlService.login}`,data).then((res:any)=>{
      // console.log('res',res);
      
       console.log('res',res);
       
     })
  }
}

