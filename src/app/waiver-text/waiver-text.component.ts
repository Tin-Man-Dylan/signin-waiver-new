import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-waiver-text',
  templateUrl: './waiver-text.component.html',
  styleUrls: ['./waiver-text.component.css']
})
export class WaiverTextComponent implements OnInit {

	nowDate: string;
	firstName: string;
	lastName: string;


  constructor() { 
  	this.nowDate = moment().format('MMMM Do, YYYY');
  	this.firstName = '';
  	this.lastName = '';
  }

  ngOnInit(): void {
  }

}
