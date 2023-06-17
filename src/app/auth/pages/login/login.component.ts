import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {}

  public showPassword:boolean = false;

  loginForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$'
          //"/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/"
        ),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(7)]],
  });

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  public errorMessages: any = {
    email: [
      { type: 'required', message: 'Por favor de llenar el campo' },
      {
        type: 'pattern',
        message: 'Por favor ingrese un correo electrónico valido',
      },
    ],

    password: [
      { type: 'required', message: 'Por favor de llenar el campo' },
      {
        type: 'minlength',
        message: 'Por favor ingrese la contraseña correcta',
      },
    ],
  };

  async login() {
    /*this.auth.singupUser({
        Email: this.formLogin.value.email,
        Password: this.formLogin.value.password,
      });*/
  }
}
