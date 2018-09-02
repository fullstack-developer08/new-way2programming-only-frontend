import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";
import { URL, CONTACT } from "../common/const";
import { Helper } from "../common/helper";

@Injectable()
export class ContactService {
  localhost;
  constructor(
    private _http: Http,
    private spinner: NgxSpinnerService,
    private helper: Helper
  ) {
    this.localhost = helper.isHostLocal();
  }

  postContactQuery(data) {
    this.spinner.show();
    return this._http.post(
      this.localhost ? CONTACT : CONTACT.replace(URL, ""),
      data
    );
  }
}
