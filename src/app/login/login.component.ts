import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
