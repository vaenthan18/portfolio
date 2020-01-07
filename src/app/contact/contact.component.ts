import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('contact');
    const array = document.getElementsByClassName("contact");

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
