import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";




@Injectable()
export class BlogService {
  LEFT_NAV;
  GET_BLOG;
  constructor(private _http: Http, private spinner: NgxSpinnerService) {
    if(window.location.hostname === 'localhost') {
       this.LEFT_NAV = "http://way2programming.com/API/techLinksandName";
       this.GET_BLOG = "http://way2programming.com/API/blog"
    } else {
       this.LEFT_NAV = "/API/techLinksandName";
       this.GET_BLOG = "/API/blog";
    }
  }
  
  getBlog(config) {
    this.spinner.show();
    return this._http.get(this.GET_BLOG, {
      params: config
    });
  }

  getLeftNav(config) {
    this.spinner.show();
    return this._http.get(this.LEFT_NAV, {
      params: config
    });
  }
}
