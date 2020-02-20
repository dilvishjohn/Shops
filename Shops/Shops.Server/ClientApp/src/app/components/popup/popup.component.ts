import { Component, Inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
 

@Component({
  selector: 'popup-box',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
})

export class WebScapeMessageBoxComponent  implements AfterViewInit {

  constructor( ) {
   
  }

  @ViewChild('popup') public messageRef: ElementRef;

  ngAfterViewInit() {
    
  }

  

  onSelect(key: string) {
   
  }

  
 
}
