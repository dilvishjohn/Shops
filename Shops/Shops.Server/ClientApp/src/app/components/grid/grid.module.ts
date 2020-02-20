import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { ShopService } from './../../servises/shops.service';

@NgModule({
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  providers: [ShopService],
  bootstrap: []
})
export class GridModule { }
