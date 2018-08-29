import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";

const CONTACT = "/API/contact";

@Injectable()
export class ContactService {
  constructor(private _http: Http, private spinner: NgxSpinnerService) {}

  postContactQuery(data) {
    this.spinner.show();
    return this._http.post(CONTACT, data);
  }
}
