import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss',]
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('code');
    const array = document.getElementsByClassName("code");

    element.addEventListener('sal:in', () => {
      for (let i = 0; i < array.length; i++) {
        (<HTMLElement>array[i]).style.color="#424242";
      }
    });

    element.addEventListener('sal:out', () => {
      for (let i = 0; i < array.length; i++) {
        (<HTMLElement>array[i]).style.color="#a1a1a1";
      }
    });
  }

}
