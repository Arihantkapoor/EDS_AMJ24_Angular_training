import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/services/posts/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent {

  constructor(private postServ: PostService){}

  postArray: Post[] = [];

  getAllPosts(){
    this.postServ.GetPosts().subscribe( data=>{
      this.postArray = data;
    });
  }

  DeletePost(post:Post){
    this.postArray = this.postArray.filter(x=>x.id!==post.id);
    this.postServ.DeletePost(post).subscribe();
  }
}
