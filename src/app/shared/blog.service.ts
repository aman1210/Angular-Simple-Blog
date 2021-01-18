import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {
  private blog: Blog;

  setBlog(blog: Blog) {
    this.blog = blog;
  }

  getBlog() {
    return this.blog;
  }
}
