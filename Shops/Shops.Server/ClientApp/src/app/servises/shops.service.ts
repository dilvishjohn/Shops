import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Observable } from 'rxjs';
@Injectable()
export class ShopService {

  constructor(private httpService: HttpClient) { }

  search(term) {
    var advisors = this.httpService.get('/api/shops/' + term)
      .pipe(
        debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
          (data: any) => {
            return (
              data.length != 0 ? data as any[] : [{ "BookName": "No Record Found" } as any]
            );
          }
        ));

    return advisors;
  }

  get<T>(): Observable<T> {
    var advisors = this.httpService.get<T>('/api/shops/')
      .pipe(
        debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
          (data: any) => {
            return (
              data.length != 0 ? data  : [{ "BookName": "No Record Found" } as any]
            );
          }
        ));

    return advisors;
  }
}
