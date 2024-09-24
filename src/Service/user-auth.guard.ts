import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const userAuthGuard: CanActivateFn = ( next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): any  => {




    let currentUrl = state.url;
    // console.log('currentUrl User->' , currentUrl)
  };


