import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from './blog.model';

@Injectable()
export class StorageService {
  private blogs: Blog[] = [
    {
      _id: 'sdfsdfsdfsdf',
      bimage:
        'https://www.clipartmax.com/png/middle/48-489786_hire-mobile-app-developer-mobile-app-developer-clipart.png',
      blog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      btitle: 'asdnafnodsfnnoinin',
      likes: 0,
      comments: [],
    },
  ];

  blogsChanged = new Subject<Blog[]>();

  getBlogs() {
    return this.blogs.slice();
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    console.log(this.blogs);
    this.blogsChanged.next(this.getBlogs());
  }
}
