import { Component, OnInit,  HostListener } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class LandingComponent implements OnInit {

  // state = 'show';

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('window:scroll')
  //   checkScroll() {
  //     const scrollPosition = window.pageYOffset
  //     if (scrollPosition >= 350) {
  //       this.state = 'hide'
  //     } else {
  //       this.state = 'show'
  //     }
  //   }
}

window.addEventListener("scroll", function(event) {
  var scroll = this.scrollY;
  var shrink = document.getElementById("shrink");
  var grow = document.getElementById("grow");

  // if (scroll > 450) {
  //   shrink.style.visibility = "hidden";
  // } else {
  //   shrink.style.visibility = "visible";
  // }

  grow.style.width = (130 + scroll / 2).toString() + "px";

  shrink.style.left = (scroll/3).toString() + "px";
});