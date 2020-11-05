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

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(res => {
        this.posts = res
      }, error => {
        alert('An unexpected error occurred.')
        console.log(error)
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''
    this.service.createPost(post)
      .subscribe(res => {
        this.posts.splice(0, 0, post)
      }, (error: Response) => {
        if (error.status === 400) {

        } else {
          alert('An unexpected error occurred.')
          console.log(error)
        }
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        console.log(res);
      }, error => {
        alert('An unexpected error occurred.')
        console.log(error)
      })
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      }, (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted.')
        } else {
          alert('An unexpected error occurred.')
          console.log(error)

        }
      })
  }

}
