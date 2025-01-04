import { HttpClient, HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
let testUrl = '/data';

interface Data{
    name:string;
}

describe('HttpClient testing module', ()=>{
    let http: HttpClient;
    let httpController: HttpTestingController;
    beforeEach( ()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
        })

        http = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);
    });
    
    it('should call testUrl', ()=>{
        const testData: Data = {
            name: "Angular"
        };
        http.get<Data>(testUrl).subscribe();

        const req = httpController.expectOne(testUrl);

        expect(req.request.method).toBe('GET');
    });

    it('should call get function', ()=>{

    })
})