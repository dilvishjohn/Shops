import { Component, Input, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ShopModel } from 'src/app/models/shop.model';
import { Util } from 'src/app/common/utils';
import { ShopService } from './../../servises/shops.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'grid',
  styleUrls: ['./grid.component.less'],
  templateUrl: 'grid.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  
  grid: Observable<ShopModel>;
  header: Array<string>;

  public get localUtil() {
    return Util;
  }

  constructor(private shopService: ShopService) {

  }

  ngOnInit(): void {
    this.header = new Array('#', 'Aдрес', 'Консультант', 'Дата назначения');
    this.grid = this.shopService.get<ShopModel>();
  }   
}
