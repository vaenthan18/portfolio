import { Component } from '@angular/core';
import * as sal from 'sal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio';

  ngOnInit() {
    sal({
      once: false,
      threshold: 0.1
    });
  }
}