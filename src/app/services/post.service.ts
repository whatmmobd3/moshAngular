import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(e) {
    return this.http.post(this.url, e)
  }

  updatePost(e) {
    return this.http.patch(this.url + "/" + e.id, JSON.stringify({ isRead: true }))
  }

  deletePost(e) {
    return this.http.delete(this.url + "/" + e.id)

  }

}
