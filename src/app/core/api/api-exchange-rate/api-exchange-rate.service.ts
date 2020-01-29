import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiExchangeRateService {

  constructor(private httpClient: HttpClient) { }

  getApiExchangeRateData(baseCurrency: string): Observable<any> {
    return this.httpClient.get(`${environment.api}latest?base=${baseCurrency}`);
  }

}
