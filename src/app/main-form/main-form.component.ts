import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../shared/blog.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit() {
    this.blogForm = new FormGroup({
      bTitle: new FormControl(null, [Validators.required], this.rejectedName),
      bImage: new FormControl(null, [Validators.required]),
      b: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.blogForm);
    const newBlog: Blog = {
      _id: Date.now().toString(),
      bimage: this.blogForm.value['bImage'],
      blog: this.blogForm.value['b'],
      btitle: this.blogForm.value['bTitle'],
    };
    this.storageService.addBlog(newBlog);
    this.router.navigate(['']);
  }

  rejectedName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      if (control.value === 'test') {
        resolve({ 'Invalid Blog Name': true });
      } else {
        resolve(null);
      }
    });
    return promise;
  }
}
