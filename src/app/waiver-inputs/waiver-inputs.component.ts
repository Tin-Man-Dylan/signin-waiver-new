import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-waiver-inputs',
  templateUrl: './waiver-inputs.component.html',
  styleUrls: ['./waiver-inputs.component.css']
})
export class WaiverInputsComponent implements OnInit {

  	@Output() firstNameSend = new EventEmitter<string>();
  	@Output() lastNameSend = new EventEmitter<string>();
  	firstName: string;
	lastName: string;


  constructor() { 
  	this.firstName = '';
  	this.lastName = '';
  }

  onNameChange(){
  	this.firstNameSend.emit(this.firstName);
  }
  onSurnameChange(){
  	this.lastNameSend.emit(this.lastName);
  }
  ngOnInit(): void {
  }

}
