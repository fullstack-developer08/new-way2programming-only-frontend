import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class BlogService {
  LEFT_NAV;
  GET_BLOG;
  UPDATE_SORT;
  constructor(private _http: Http, private spinner: NgxSpinnerService) {
    if (window.location.hostname === "localhost") {
      this.LEFT_NAV = "http://way2programming.com/API/techLinksandName";
      this.GET_BLOG = "http://way2programming.com/API/blog";
      this.UPDATE_SORT = "http://way2programming.com/API/updateSort";
    } else {
      this.LEFT_NAV = "/API/techLinksandName";
      this.GET_BLOG = "/API/blog";
      this.UPDATE_SORT = "/API/updateSort";
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

  updateLeftNavWithSortData(data) {
    this.spinner.show();
    return this._http
      .post(this.UPDATE_SORT, JSON.stringify(data), {
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .map(res => {
        res.json();
        this.spinner.hide();
      })
      .subscribe();
  }
}
