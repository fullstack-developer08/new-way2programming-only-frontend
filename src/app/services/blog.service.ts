import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";
import { LEFT_NAV, BLOG, UPDATE_SORT, URL } from "../common/const";
import { Helper } from "../common/helper";

@Injectable()
export class BlogService {
  localhost;

  constructor(
    private _http: Http,
    private spinner: NgxSpinnerService,
    private helper: Helper
  ) {
    this.localhost = helper.isHostLocal();
  }

  getBlog(config) {
    this.spinner.show();
    return this._http.get(
      this.localhost ? BLOG : BLOG.replace(URL, ""),
      {
        params: config
      }
    );
  }

  getLeftNav(config) {
    this.spinner.show();
    return this._http.get(
      this.localhost ? LEFT_NAV : LEFT_NAV.replace(URL, ""),
      {
        params: config
      }
    );
  }

  updateLeftNavWithSortData(data) {
    this.spinner.show();
    return this._http
      .post(
        this.localhost ? UPDATE_SORT : UPDATE_SORT.replace(URL, ""),
        JSON.stringify(data),
        {
          headers: new Headers({ "Content-Type": "application/json" })
        }
      )
      .map(res => {
        res.json();
        this.spinner.hide();
      })
      .subscribe();
  }
}
