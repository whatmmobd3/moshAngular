import {
  HttpClient
} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(c: HttpClient) {
    c.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.posts = res
    })

  }

}
