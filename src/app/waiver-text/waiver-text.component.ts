import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { AngularFireStorage } from '@angular/fire/compat/storage';


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


  constructor(private storage: AngularFireStorage) { 
  	this.nowDate = moment().format('MMMM Do, YYYY'); // See Moment DOcs for format
  	this.firstName = '';
  	this.lastName = '';
  }

  ngOnInit(): void {
  }

  generatePDF(){

    if(this.firstName == null){this.firstName = ''}
      if(this.lastName == null){this.lastName = ''}

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

        //pdf.save(this.firstName+this.lastName+'_'+moment().format('YYYY-MM-DD')+'.pdf'); // Uncomment to save on web version

        //let pdfOutput = pdf.output('datauri'); //loads a new window when using 'datauri', would be nice to stop
        //console.log(pdfOutput)
        let pdfBlob = pdf.output('blob');
        
        const file = pdfBlob;
        const metadata = { contentType: 'application/pdf',};
        const filePath = '/waivers/' + this.firstName+this.lastName+'_'+moment().format('YYYY-MM-DD')+'.pdf';
        const task = this.storage.upload(filePath, file, metadata); // Uploads as PDF to Firebase Cloud Storage
        
        //this.writePDF(pdfOutput) // Uncoment this and above conversion to 'datauri'(Base64 PDF String), to save in app version

        
     });

  }

      async writePDF(pdfOutputString: any) { // Need to save PDF in app version
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
