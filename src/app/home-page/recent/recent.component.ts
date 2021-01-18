import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    private storageService: StorageService,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.blogs = this.storageService.getBlogs();
    this.storageService.blogsChanged.subscribe((value) => {
      this.blogs = value;
    });
  }

  openBlog(blog: Blog) {
    this.blogService.setBlog(blog);
    this.router.navigate(['', blog._id]);
  }
}
