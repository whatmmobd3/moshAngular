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

  ngOnInit() {
    this.http.get(this.url).
      subscribe(res => {
        this.posts = res
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''
    this.http.post(this.url, post).subscribe(res => {
      // post['id'] = res.id
      this.posts.splice(0, 0, post)
    })
  }

  updatePost(post) {
    this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(res => {
        console.log(res);
      })
  }

  deletePost(post){
    this.http.delete(this.url + "/" + post.id).subscribe(res =>{
      let index = this.posts.indexOf(post)
      this.posts.splice(index,1)
    })
  }

}
