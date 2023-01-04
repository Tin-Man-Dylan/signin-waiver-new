import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { SignaturePadComponent } from '@almothafar/angular-signature-pad';

@Component({
  selector: 'app-waiver-signature',
  templateUrl: './waiver-signature.component.html',
  styleUrls: ['./waiver-signature.component.css']
})
export class WaiverSignatureComponent {

	 @ViewChild('signature')
  public signaturePad: SignaturePadComponent;

  signaturePadOptions: any = { // passed through to szimek/signature_pad constructor
    'minWidth': 3,
    'canvasWidth': 550,
    'canvasHeight': 300,
    'backgroundColor': "rgb(255,255,255)"
  };

  @Output() doneSigSend = new EventEmitter<string>();
  

  constructor() {  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 3); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.doneSigSend.emit(this.signaturePad.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clearSignature() {
  	this.signaturePad.clear();
    this.doneSigSend.emit(this.signaturePad.toDataURL());
  }

}
