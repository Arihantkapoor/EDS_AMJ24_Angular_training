import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class authInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Auth Interceptor called");

        const modifyrequest = req.clone({
            headers: req.headers.append('authToken','123abc')
        });
        
        return next.handle(modifyrequest).pipe(
            tap( event =>{
                if(event.type===HttpEventType.Response){
                    console.log("response has arrived");
                    console.log(event.body);
                    
                }
            })
        );
    }

}