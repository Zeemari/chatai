import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        conpassword: ['', [Validators.required]],
      },
      { validators: this.Mustmatch('password', 'conpassword') }
    );
  }

  get f() {
    return this.signinForm.controls;
  }

  Mustmatch(password: any, conpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[conpassword];

      if (
        conpasswordcontrol.errors &&
        !conpasswordcontrol.errors['Mustmatch']
      ) {
        return;
      }

      if (passwordcontrol.value !== conpasswordcontrol.value) {
        conpasswordcontrol.setErrors({ Mustmatch: true });
      } else {
        conpasswordcontrol.setErrors(null);
      }
    };
  }
}
