import { Component, OnInit } from '@angular/core';
import { ApiExchangeRateService } from 'src/app/core/api/api-exchange-rate';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  baseCurrency = 'PLN';
  form: FormGroup = new FormGroup({
    value: new FormControl(0)
  });

  constructor(private apiExchangeRateService: ApiExchangeRateService) {}

  ngOnInit() {
    this.apiExchangeRateService.getApiExchangeRateData('PLN').subscribe(data => console.log(data));
  }

  calculate() {

  }

}
