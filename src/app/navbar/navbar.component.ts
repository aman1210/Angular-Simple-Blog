import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 20) {
      var n = document.querySelector('.navbar');
      n.classList.add('down');
      var nb = document.querySelector('.navbar-brand');
      nb.classList.add('down');
    } else if (number < 60) {
      var n = document.querySelector('.navbar');
      n.classList.remove('down');
      var nb = document.querySelector('.navbar-brand');
      nb.classList.remove('down');
    }
  }
}
