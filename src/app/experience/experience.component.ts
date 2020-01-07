import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('work');
    const array = document.getElementsByClassName("work");

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
