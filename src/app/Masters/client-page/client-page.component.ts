import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [CardModule,InputTextModule,CheckboxModule,ReactiveFormsModule,FormsModule,MultiSelectModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {
  CLIENT_NAME:string = '';
  ACTIVE:boolean = true;
}
