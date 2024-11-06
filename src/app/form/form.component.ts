import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserInformationModel } from '../ModelProject/UserInformtion.model';
import { LoadingComponent } from '../loading/loading.component';
import { delay, take } from 'rxjs';

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
  constructor(private http: HttpClient) {}
  public apiUrl: string = 'https://bot.sanilo.ir';
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    address: [''],
  });

  SendInfo() {
    this.isLoading = true;
    const userInfo = new UserInformationModel(
      this.firstFormGroup.controls['firstName'].value!,
      this.firstFormGroup.controls['lastName'].value!,
      this.firstFormGroup.controls['address'].value!,
      this.firstFormGroup.controls['phoneNumber'].value!
    );
    this.SendData(userInfo)
      .pipe(take(1), delay(1000))
      .subscribe({
        next: (x) => {
          this.isLoading = false;
          this.firstFormGroup.patchValue({
            address: null,
            firstName: null,
            lastName: null,
            phoneNumber: null,
          });
          console.log(x);
        },
        error: (err: any) => {
          console.log(err);
          this.isLoading = false;
        },
      });
  }

  SendData(userInfo: UserInformationModel) {
    return this.http.post<any>(`${this.apiUrl}/send-contact`, userInfo);
  }
}
