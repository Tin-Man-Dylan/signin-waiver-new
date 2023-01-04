import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signin-waiver-new';
  signatureMain: string;
  firstNameMain: string;
  lastNameMain: string;


  doneSigRecieve(sig: string):void{
  	this.signatureMain = sig
  	console.log(sig);
  	console.log("here")
  }
  firstNameRecieve(nameMain: string):void{
  	this.firstNameMain = nameMain
  }
  lastNameRecieve(surnameMain: string):void{
  	this.lastNameMain = surnameMain
  }

}
