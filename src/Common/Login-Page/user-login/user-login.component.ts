import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SharedService } from '../../../Service/shared.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [InputTextModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
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


}
