import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) { }
isloggedin:boolean=false;
login(name:string):Observable<any>{

  return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
    map(
      data=>{
        const userdata=data;
        const user=userdata.find((x:any)=>x.name==name);
        this.isloggedin=(user!=undefined)
        return this.isloggedin;
      }
    )
  )
 
}

}
