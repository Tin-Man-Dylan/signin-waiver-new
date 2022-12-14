import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Component({
  selector: 'app-waiver-text',
  templateUrl: './waiver-text.component.html',
  styleUrls: ['./waiver-text.component.css']
})
export class WaiverTextComponent implements OnInit {

	nowDate: string;
	@Input() signature: string;
	@Input() firstName: string;
	@Input() lastName: string;


  constructor() { 
  	this.nowDate = moment().format('MMMM Do, YYYY');
  	this.firstName = '';
  	this.lastName = '';
  }

  ngOnInit(): void {
  }

  generatePDF(){
  	var pdfHeight = 297; //in mm
   	var pdfWidth = 210;

   	let data = document.getElementById('divToPrint')!;  
        html2canvas(data, {
        scrollX: -7,
        scrollY: -window.scrollY,
        scale: 1,
      }).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jsPDF('p', 'mm',  [pdfWidth, pdfHeight]);
        //let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
        //let pdf = new jsPDF('p', 'cm', 'a4'); //Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
        //pdf.save(this.firstName+this.lastName+'_'+moment().format('YYYY-MM-DD')+'.pdf');

        let pdfOutput = pdf.output('datauri');
        console.log("here out")
        this.writePDF(pdfOutput)

        
     });

  }

      async writePDF(pdfOutputString: any) {
          console.log("here in")
          await Filesystem.appendFile({
            path: this.firstName+this.lastName+'_'+moment().format('YYYY-MM-DD')+'.pdf',
            data: pdfOutputString,
            directory: Directory.Documents,
            //encoding: Encoding.UTF8,
          });
          console.log("here done")
        };

}
