import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SharedService } from '../../../Service/shared.service';
import { CommonModule } from '@angular/common';
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
currentPage: string | null = null;

  constructor(private router: Router,public SharedService:SharedService,private ActivatedRoute:ActivatedRoute){
  }
  ngOnInit(){
    this.RouterUrl = this.ActivatedRoute.url;
    this.RouterUrl.subscribe((urlSegments:any) => {
console.log('urlSegments ->' , urlSegments)
      this.currentPage = urlSegments.map((segment:any) => segment.path).join('/');
console.log('currentPage ->' , this.currentPage)
    });
   }

  forgetPasswordFun(){
    this.router.navigate(['/user/forgetpassword']);
  }


}
