import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(["/"]);
    this.scroller.scrollToAnchor("reviews");
    }
  }

