import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  @HostListener('wheel', ['$event']) handleWheelEvent(event) {
    event.preventDefault();
  }

  @HostListener('touchmove', ['$event']) function(event) {
    event.preventDefault();
  }

  constructor() { }

  ngOnInit() {

  }

}
