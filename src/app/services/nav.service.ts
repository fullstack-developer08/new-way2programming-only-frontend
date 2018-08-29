import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";



@Injectable()
export class NavService {
  NAVS
  constructor(private _http: Http, private spinner: NgxSpinnerService) {
     if(window.location.hostname === 'localhost') {
      this.NAVS = 'http://way2programming.com/API/navs';
     } else {
      this.NAVS = '/API/navs';
     }
  }

  getNavs() {
    this.spinner.show();
    return this._http.get(this.NAVS);
  }
}
