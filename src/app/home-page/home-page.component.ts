import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../shared/blog.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  blogs: Blog[] = [];
  private blogSub: Subscription;
  constructor(private storageSerivce: StorageService) {}

  ngOnInit() {
    this.blogs = this.storageSerivce.getBlogs();
    this.storageSerivce.blogsChanged.subscribe((value) => {
      this.blogs = value;
    });
  }
}
