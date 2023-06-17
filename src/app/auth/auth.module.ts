import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AuthRoutingModule,
      MaterialModule
    ]
  })
  export class AuthModule { }
  