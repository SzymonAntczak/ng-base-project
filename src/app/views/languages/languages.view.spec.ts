import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesView } from './languages.view';

describe('LanguagesComponent', () => {
  let component: LanguagesView;
  let fixture: ComponentFixture<LanguagesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
