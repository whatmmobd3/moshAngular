import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(this.url).
      subscribe(res => {
        this.posts = res
      })
  }



}
