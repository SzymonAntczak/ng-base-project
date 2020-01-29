import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesView } from './currencies.view';

describe('CurrenciesComponent', () => {
  let component: CurrenciesView;
  let fixture: ComponentFixture<CurrenciesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
