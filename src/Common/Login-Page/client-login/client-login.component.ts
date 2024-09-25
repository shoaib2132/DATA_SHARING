import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../Service/shared.service';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-login',
  standalone: true,
  imports: [InputTextModule,CommonModule],
  templateUrl: './client-login.component.html',
  styleUrl: './client-login.component.css'
})
export class ClientLoginComponent {
  test:any = "../../../assets/Images/Common-Image/tataplay_logo.png"
  ImageView:boolean = false;
  ImageView1:boolean = false;
  RouterUrl:any;
  bankName: string | null = null;
  
    constructor(private router: Router,public SharedService:SharedService,private ActivatedRoute:ActivatedRoute){
    }
    ngOnInit(){
      this.RouterUrl = this.ActivatedRoute.url;
      this.ActivatedRoute.params.subscribe(params => {
        this.bankName = params['bankName'];
        console.log('bankName ->' , this.bankName)
      });
     }
  
    forgetPasswordFun(){
      this.router.navigate(['/user/forgetpassword']);
    }
    signInFun(){
      this.router.navigate(['/user/dashboard']);
    }
  
  
}
