import { PostsComponent } from "./posts.component"
import { Post } from "src/app/Model/post";
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { PostService } from "src/app/services/posts/post.service";

describe('Post Component', () => {

    let postcomp: PostsComponent;
    let moqPostServ: any;

    let POSTS: Post[] = [];

    beforeEach(() => {
        POSTS = [{
            "id": 1,
            "title": "Exit Polls",
            "body": "BJP getting 350+ in 2024"
        },
        {
            "id":2,
            "title":"ICC Wt20 starts",
            "body":"America is hosting this WCC"
        }
        ];

        //creating moq object for testing without hitting actual service
        moqPostServ = jasmine.createSpyObj('PostService',['GetPosts','DeletePost']);

        TestBed.configureTestingModule({
            providers:[PostsComponent,{
                provide:PostService, useValue: moqPostServ
            }]
        })

        // postcomp = new PostsComponent(moqPostServ);
        postcomp = TestBed.inject(PostsComponent);
    });

    describe('Checking for delete()',()=>{

        it('Should delete the selected post', ()=>{
            moqPostServ.DeletePost.and.returnValue(of(true)); 
            postcomp.postArray = POSTS;
            postcomp.DeletePost(POSTS[1]);

            const length = postcomp.postArray.length;

            expect(length).toBe(1);
        });

        it('Delete should be called only once', ()=>{
            moqPostServ.DeletePost.and.returnValue(of(true)); 
            postcomp.postArray = POSTS;
            postcomp.DeletePost(POSTS[1]);
            //check how many times a function is called
            expect(moqPostServ.DeletePost).toHaveBeenCalledTimes(1);
        });

        it('Actual Post should be deleted', ()=>{
            moqPostServ.DeletePost.and.returnValue(of(true)); 
            postcomp.postArray = POSTS;
            postcomp.DeletePost(POSTS[1]);
            for(let i of postcomp.postArray){
                expect(i).not.toEqual(POSTS[1]);
            }
        })
    })



})