import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var $randomnbr = $('.nbr');
      var $timer = 30;
      var $it;
      var $data = 0;
      var index;
      var change;
      var letters = ["V", "A", "E", "N", "T", "H", "A", "N", "J", "E", "E", "V", "A", "R", "A", "J", "A", "H"];

      $randomnbr.each(function () {

        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);

      });

      function random() {
        return Math.round(Math.random() * 9);
      };

      function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
      };

      function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function () {
          if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
        });
      };

      $it = setInterval(value, $timer);
  }
}

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  var shrink = document.getElementById("shrink");
  var grow = document.getElementById("grow");

  grow.style.width = (130 + scroll / 2).toString() + "px";

  shrink.style.left = (scroll / 3).toString() + "px";
});