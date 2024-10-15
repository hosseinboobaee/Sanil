import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent {

}
