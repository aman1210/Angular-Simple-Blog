import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/blog.model';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.blogs = this.storageService.getBlogs();
    this.storageService.blogsChanged.subscribe((value) => {
      this.blogs = value;
    });
  }
}
