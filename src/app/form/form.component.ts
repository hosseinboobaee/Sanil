import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserInformationModel } from '../ModelProject/UserInformtion.model';
import { LoadingComponent } from '../loading/loading.component';
import { delay, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LoadingComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  isLoading: boolean = false;
  constructor(private http: HttpClient, private toastr:ToastrService) {}
  public apiUrl: string = 'https://bot.sanilo.ir';
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
  });

  SendInfo() {
  
    const userInfo = new UserInformationModel(
      this.firstFormGroup.controls['firstName'].value!,
      this.firstFormGroup.controls['lastName'].value!,
      this.firstFormGroup.controls['address'].value!,
      this.firstFormGroup.controls['phoneNumber'].value!
    );
    if(this.firstFormGroup.valid){
      this.isLoading = true;
      this.SendData(userInfo)
      .pipe(take(1), delay(1000))
      .subscribe({
        next: (x) => {
          this.isLoading = false;
          this.firstFormGroup.reset();
          console.log(x);
        },
        error: (err: any) => {
          console.log(err);
          this.isLoading = false;
        },
      });
    }
   
    else{
      if (this.firstFormGroup.get('firstName')?.invalid) {
        this.toastr.warning('نام خود را وارد نمایید', 'خطا');
      }
      if (this.firstFormGroup.get('lastName')?.invalid) {
        this.toastr.warning('نام خانوادگی خود را وارد نمایید', 'خطا');
      }
      if (this.firstFormGroup.get('phoneNumber')?.invalid) {
        this.toastr.warning('شماره تلفن خود را وارد نمایید', 'خطا');
      }
      if (this.firstFormGroup.get('address')?.invalid) {
        this.toastr.warning('نام مجموعه خود را وارد نمایید', 'خطا');
      }
    }
    
  }

  SendData(userInfo: UserInformationModel) {
    return this.http.post<any>(`${this.apiUrl}/send-contact`, userInfo);
  }
}
