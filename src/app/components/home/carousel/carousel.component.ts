import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [
    {
      provide: NgbCarouselConfig,
      useValue: { interval: 3000, noPause: true, showIndicators: true },
    },
  ],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
