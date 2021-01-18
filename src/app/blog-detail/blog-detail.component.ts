import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blog = this.blogService.getBlog();
    console.log(this.blog);
  }
}
