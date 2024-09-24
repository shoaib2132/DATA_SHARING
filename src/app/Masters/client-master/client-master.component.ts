import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-client-master',
  standalone: true,
  imports: [FormsModule,CardModule,CalendarModule,InputTextModule,
    DropdownModule,MultiSelectModule,RadioButtonModule,CheckboxModule,
    ButtonModule],
  templateUrl: './client-master.component.html',
  styleUrl: './client-master.component.css'
})
export class ClientMasterComponent {
  DATE:any;
  CLIENT_NAME:any;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
SELECTEDCITY:any;
ingredient!: string;
pizza: string[] = [];

}
