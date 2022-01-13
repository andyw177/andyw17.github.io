import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imageSrc = 'https://i.imgur.com/iGhjigj.png'
  //link to project logo
  imageAlt = 'logo'
  constructor() { }

  ngOnInit(): void {
  }

}
