import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WaiverTextComponent } from './waiver-text/waiver-text.component';
import { WaiverSignatureComponent } from './waiver-signature/waiver-signature.component';
import { WaiverInputsComponent } from './waiver-inputs/waiver-inputs.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';

import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';

@NgModule({
  declarations: [
    AppComponent,
    WaiverTextComponent,
    WaiverSignatureComponent,
    WaiverInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    AngularSignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
