import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { WebScapeMessageBoxComponent } from './popup.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    WebScapeMessageBoxComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [WebScapeMessageBoxComponent],
  entryComponents: [WebScapeMessageBoxComponent],
})
export class WebScapeMessagePromptModule { }
