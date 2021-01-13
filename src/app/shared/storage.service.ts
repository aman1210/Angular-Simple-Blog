import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from './blog.model';

@Injectable()
export class StorageService{
    private blogs: Blog[] = [];
    
    blogsChanged = new Subject<Blog[]>();

    getBlogs(){
        return this.blogs.slice();
    }

    addBlog(blog: Blog){
        this.blogs.push(blog);
        console.log(this.blogs);
        this.blogsChanged.next(this.getBlogs());
    }
}