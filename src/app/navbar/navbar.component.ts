import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imageSrc = 'https://i.imgur.com/iGhjigj.png'
  //link to project logo
  imageAlt = 'logo'
  constructor() { }

  ngOnInit(): void {
  }

}
