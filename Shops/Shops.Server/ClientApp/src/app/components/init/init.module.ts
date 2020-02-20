import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from './../grid/grid.module';
import { InitComponent } from './init.component';

@NgModule({
  declarations: [
    InitComponent
  ],
  exports: [
    InitComponent,
  ],
  imports: [
    GridModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class InitModule { }
