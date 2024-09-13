import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

}
