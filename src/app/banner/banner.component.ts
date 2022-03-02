import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imageSrc = 'https://imgur.com/PrUCdsk.png'
  //link to project logo
  imageAlt = 'logo'
  constructor() { }

  ngOnInit(): void {
  }

}
