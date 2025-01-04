import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
// import {alertify} from '../node_modules/alertifyjs/build'
export class LoggingInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Logging Interceptor called");

        console.log("request sent to URL " + req.url);
        
        return next.handle(req).pipe(
            catchError( 
                (errorData:any)=>{
                    if(errorData.status==='404'){
                        console.log("unauthorized access");
                    }

                    console.log(errorData);
                    // alertify.error(errorData.message);
                    alert(errorData.message);
                    return throwError(errorData);
                }
        )


        )
        
    }
}