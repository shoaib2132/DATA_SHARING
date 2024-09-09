import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private Router:Router){

  }

  ngOnInit(){

  }
   

  ChangeRouterLink(val:any){
    if(val == 1){
     this.Router.navigate(['dashboard']);
    }else if(val == 2){
      this.Router.navigate(['layout']);
    }else if(val == 3){
      this.Router.navigate(['forgetpassword']);
    }else if(val == 4){
      this.Router.navigate(['unauthorized']);
    }
  }
}
