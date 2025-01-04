import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./Login.service";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class AuthService implements CanActivate {

    serv:LoginService = inject(LoginService);
    routerServ:Router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
        if(!this.serv.isLogged){
            alert('You are not allowed to access, first login');
            this.routerServ.navigate(['Login'],{
                queryParams:{
                    returnUrl: route.url
                }
            });
            return false;
        }
        return true;

    }

}