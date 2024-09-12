import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {


  constructor(private Router:Router){

  }

  validateLogin(){
    this.Router.navigate(['/user/clientpage'])

  }


}


