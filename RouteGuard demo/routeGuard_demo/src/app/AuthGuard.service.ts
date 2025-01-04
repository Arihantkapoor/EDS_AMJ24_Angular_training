import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';


export interface IDeactivated{
  canExit:()=>boolean|Observable<boolean> | Promise<boolean>
}
@Injectable({
  providedIn: 'root'
})

export class AuthguardService implements CanActivate,CanActivateChild,CanDeactivate<IDeactivated> {

constructor(private router:Router
  ,private serv:LoginService
) { }
  canDeactivate(component: IDeactivated, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return component.canExit();
  }

// canDeactivate(
//   component: LoginComponent,
//   currentRoute: ActivatedRouteSnapshot,
//   currentState: RouterStateSnapshot,
//   nextState: RouterStateSnapshot
//   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
//   return this.permissions.canDeactivate(this.currentUser, route.params.id);
//   }
  

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(!this.serv.isloggedin){
      alert("access denied");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
