import { Component, OnInit } from '@angular/core';
import * as sal from 'sal.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sal({
      once: false,
    });

    const element = document.getElementById('about');
    const array = document.getElementsByClassName("about");

    element.addEventListener('sal:in', ({ target }) => {
      for (let i = 0; i < array.length; i++) {
        (<HTMLElement>array[i]).style.color="#424242";
      }
      console.log('entering', target);
    });

    element.addEventListener('sal:out', ({ target }) => {
      for (let i = 0; i < array.length; i++) {
        (<HTMLElement>array[i]).style.color="#a1a1a1";
      }
      console.log('entering', target);
    });
  }
}
