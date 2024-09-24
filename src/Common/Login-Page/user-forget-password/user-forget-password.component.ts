import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-user-forget-password',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './user-forget-password.component.html',
  styleUrl: './user-forget-password.component.css'
})
export class UserForgetPasswordComponent {

  constructor(private router: Router){}
  // Login Function
  loginFun(){
    this.router.navigate(['/user/login']);
  }
  
}
