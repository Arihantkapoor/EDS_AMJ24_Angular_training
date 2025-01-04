import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { UserModel } from "../Models/userModel";
import { User } from "../Models/user";

@Injectable({
    providedIn:"root"
})
export class UserModelService{

    constructor(private http: HttpClient){}
    url = 'http://localhost:3000/User'

    getAllUsers():Observable<UserModel[]>{
        
        let obj = new HttpHeaders().set(
            'content-type','application/json'
        ).set(
            'content-type','application/xml'
        );

        // obj.set(
        //     'content-type','application/json'
        // );
        // obj.set(
        //     'content-type','application/xml'
        // );


        console.log(obj);

        // obj = obj.append(
        //     'content-type','application/json'
        // );
        // obj = obj.append(
        //     'content-type','application/xml'
        //     // 'access-control-allow-origin','*'
        // )

        // let h = obj.getAll('content-type');

        // let p = obj.has('access-control-allow-origin');

        // console.log(p);

        // if(h==null){
        //     console.log('not present');
        // }
        // else{
        //     console.log(h);
        // }

        // console.log(obj);

        return this.http.get<UserModel[]>(this.url,{'headers':obj});

    }

    getUser():Observable<UserModel[]>{
        return this.http.get<UserModel[]>(this.url).pipe(catchError(this.handleErrors));
    }


    PostUser(user:UserModel):Observable<UserModel>{
        return this.http.post<UserModel>(this.url,user);
    }

    deleteUser(id:number):Observable<UserModel>{
        return this.http.delete<UserModel>(this.url + '/' + id);
    }

    handleErrors(httperr: HttpErrorResponse){
        if(httperr.error instanceof ErrorEvent){
            console.error('this is the client side error ', httperr.error.message );
        }
        else{
            console.error("this is server side error ", httperr);
        }

        return throwError( 
            ()=>new Error('Something went wrong, please try again later...')
        )
    }
}