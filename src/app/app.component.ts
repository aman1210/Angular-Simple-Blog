import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from './shared/blog.model';
import { StorageService } from './shared/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
