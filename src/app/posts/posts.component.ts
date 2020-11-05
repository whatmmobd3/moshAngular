import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(private service: PostService) {
    this.service.getPosts()
      .subscribe(res => {
        this.posts = res
      }, error => {
        alert('An unexpected error occurred.')
        console.log(error);

      })
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(res => {
        this.posts = res
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''
    this.service.createPost(post)
      .subscribe(res => {
        this.posts.splice(0, 0, post)
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        console.log(res);
      })
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })
  }

}
