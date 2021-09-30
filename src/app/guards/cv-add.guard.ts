import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvAddGuard implements CanActivate {
  constructor(private toastrService: ToastrService,
    private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("user")) {

      let user = JSON.parse(localStorage.getItem("user"))
      console.log(user)
      let employer = user.message
      if (employer.includes("candidate")) {

        return true

      }
      else {
        this.toastrService.error("Geçersiz Yetki")
        this.router.navigate(["JobAdvertisement"])
        return false
      }

    }

    else {
      this.toastrService.warning("Giriş Yapmalısınız")
      this.router.navigate(["login"])
      return false
    }

  }
}
