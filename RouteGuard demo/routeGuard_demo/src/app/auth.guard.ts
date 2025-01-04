import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

export const routeGuard=()=>{
    const _router=inject(Router);
    const _serv=inject(LoginService);

    if(!_serv.isloggedin){
        alert("access denied");
        _router.navigate(['login']);
        return false;
    }
    return true;
}
// export const routeGuardChild=()=>{
    
//     return routeGuard;
// }