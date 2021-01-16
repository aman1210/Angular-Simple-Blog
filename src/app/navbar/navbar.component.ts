import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  prevScrollpos = window.pageYOffset;

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const newPos = window.pageYOffset;
    if (this.prevScrollpos > newPos) {
      document.querySelector('.navbar').classList.remove('down');
    } else {
      document.querySelector('.navbar').classList.add('down');
    }
    this.prevScrollpos = newPos;
  }
}
