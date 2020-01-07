import { Component, OnInit, HostListener } from '@angular/core';
import * as sal from 'sal.js';
import * as $ from 'jquery';
import jump from 'jump.js';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sal({
      once: false,
    });
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("toggled");
      $(".hamburger").toggleClass("is-active");
      console.log("yeeeeeeeet");
    });

    $('#button1').click(function(x) {
      jump('.target1');
    });

    $('#button2').click(function(x) {
      jump('.target2');
    });

    $('#button3').click(function(x) {
      jump('.target3');
    });

    $('#button4').click(function(x) {
      jump('.target4');
    });

    $('#button5').click(function(x) {
      jump('.target5');
    });
    // const element = document.getElementById('about');

    // element.addEventListener('sal:in', ({ target }) => {
    //   this.state = 'show'
    //   console.log('entering', target);
    // });

    // element.addEventListener('sal:out', ({ target }) => {
    //   this.state = 'hide'
    //   console.log('entering', target);
    // });
  }

  // @HostListener('window:scroll') checkScroll() {
  //   const scrollPosition = window.pageYOffset;

  //   if (scrollPosition >= 550) {
  //     this.state = 'show'
  //   } else {
  //     this.state = 'hide'
  //   }
  // }
}
