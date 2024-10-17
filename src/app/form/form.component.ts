import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserInformationModel } from '../ModelProject/UserInformtion.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})


export class FormComponent {
  constructor(private http: HttpClient){

  }
  public apiUrl:string = 'http://138.201.6.213:3000';
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    address: [''],
  });

SendInfo(){
const userInfo =new UserInformationModel(
  this.firstFormGroup.controls['firstName'].value!,
  this.firstFormGroup.controls['lastName'].value!,
  this.firstFormGroup.controls['address'].value!,
  this.firstFormGroup.controls['phoneNumber'].value!,
)
this.SendData(userInfo).subscribe(x =>{
  console.log(x);
  
})
}

  SendData(userInfo:UserInformationModel){
    return this.http.post<any>(`${this.apiUrl}/send-contact`,userInfo)
  }
}
