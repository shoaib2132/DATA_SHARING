import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CommonService } from './common.service';
import { SharedService } from './shared.service';
import { HttpService } from './http.service';
import { UrlService } from './url.service';

export const authGuard: CanActivateFn = ( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any  => {




      let currentUrl = state.url;
      // console.log('currentUrl admin ->' , currentUrl)
    }

  // constructor(private auth: CommonService,
  //   private myRoute: Router,public sharedservice: SharedService,
  //   private http:HttpService,private Url:UrlService){
  // }
  

