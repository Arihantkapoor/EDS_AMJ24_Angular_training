import { HttpClient } from "@angular/common/http";
import { PostService } from "./post.service"
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";

describe('Post Service HttpClient', ()=>{

    let postservice: PostService;
    let httpclientSpy: jasmine.SpyObj<HttpClient>;

    let POSTS = [{
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

    beforeEach( ()=>{
        httpclientSpy = jasmine.createSpyObj('HttpClient',['get']);
        TestBed.configureTestingModule({
            providers: [PostService, {
                provide: HttpClient, useValue: httpclientSpy
            }]
        })
        // postservice = new PostService(httpclientSpy);
        postservice = TestBed.inject(PostService);
        httpclientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    describe('Get Post', ()=>{

        it('Should return data when GetPost is called', (d:DoneFn)=>{
            httpclientSpy.get.and.returnValue(of(POSTS));

            postservice.GetPosts().subscribe( (data)=>{
                 expect(data).toEqual(POSTS);
                 d();
            }, error=>{
                d.fail();
            });

            expect(httpclientSpy.get).toHaveBeenCalledTimes(1);
        })
    
    
    })
})

