import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiverTextComponent } from './waiver-text/waiver-text.component';
import { WaiverSignatureComponent } from './waiver-signature/waiver-signature.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SignaturePad } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    AppComponent,
    WaiverTextComponent,
    WaiverSignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NoopAnimationsModule,
    FormsModule,
    SignaturePad
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
