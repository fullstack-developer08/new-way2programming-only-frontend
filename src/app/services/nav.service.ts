import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";
import { URL, NAVS, GET_HREF } from "../common/const";
import { Helper } from "../common/helper";

@Injectable()
export class NavService {
  localhost;
  
  constructor(
    private _http: Http,
    private spinner: NgxSpinnerService,
    private helper: Helper
  ) {
    this.localhost = helper.isHostLocal();
  }

  getNavs() {
    this.spinner.show();
    return this._http.get(this.localhost ? NAVS : NAVS.replace(URL, ""));
  }

  selectNav(data) {
    this.spinner.show();
    return this._http.get(
      this.localhost ? GET_HREF : GET_HREF.replace(URL, ""),
      { params: data }
    );
  }
}
