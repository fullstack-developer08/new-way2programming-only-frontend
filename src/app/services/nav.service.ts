import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";



@Injectable()
export class NavService {
  NAVS;
  GET_HREF;

  constructor(private _http: Http, private spinner: NgxSpinnerService) {
     if(window.location.hostname === 'localhost') {
      this.NAVS = 'http://way2programming.com/API/navs';
      this.GET_HREF = 'http://way2programming.com/API/getHref';
     } else {
      this.NAVS = '/API/navs';
      this.GET_HREF = '/API/getHref';
     }
  }

  getNavs() {
    this.spinner.show();
    return this._http.get(this.NAVS);
  }

  selectNav(data) {
    this.spinner.show();
    return this._http.get(this.GET_HREF,{ params: data});
  }
}
