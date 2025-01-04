import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  GetPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  DeletePost(post:Post){
    return this.http.delete('https://jsonplaceholder.typicode.com/post/${post.id}')
  }
}
