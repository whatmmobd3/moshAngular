import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(res => {
      this.posts = res
    })
  }

  createPost(e: HTMLInputElement) {

    let post = { title: e.value }
    e.value = ''

    this.http.post(this.url, post).subscribe(res => {
      post['id'] = res.id
      this.posts.splice(0, 0, post)
    })


  }

}
