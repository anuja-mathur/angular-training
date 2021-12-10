import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerText:string = '';
  bannerSubHeading:string = '';

  constructor() { }

  ngOnInit(): void {
    this.bannerText = 'Smart Phones';
    this.bannerSubHeading = 'A whole new smart experience';
  }

}
