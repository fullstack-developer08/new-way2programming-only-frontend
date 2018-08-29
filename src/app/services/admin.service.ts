import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";

// 'http://way2programming.com'

@Injectable()
export class AdminService {
  ADD_BLOG;
  EDIT_BLOG;
  GET_BLOG;
  DELETE_BLOG;

  constructor(private _http: Http, private spinner: NgxSpinnerService) {
    if (window.location.hostname === "localhost") {
      this.ADD_BLOG = "http://way2programming.com/API/blogs";
      this.EDIT_BLOG = "http://way2programming.com/API/updateBlog";
      this.GET_BLOG = "http://way2programming.com/API/blog";
      this.DELETE_BLOG = "http://way2programming.com/API/deleteBlog";
    } else {
      this.ADD_BLOG = "/API/blogs";
      this.EDIT_BLOG = "/API/updateBlog";
      this.GET_BLOG = "/API/blog";
      this.DELETE_BLOG = "/API/deleteBlog";
    }
  }

  addBlog(data) {
    this.spinner.show();
    return this._http
      .post(this.ADD_BLOG, JSON.stringify(data), {
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .map(res => {
        res.json();
        this.spinner.hide();
      })
      .subscribe();
  }

  editBlog(data) {
    this.spinner.show();
    return this._http
      .post(this.EDIT_BLOG, JSON.stringify(data), {
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .map(res => {
        res.json();
        this.spinner.hide();
      })
      .subscribe();
  }

  getBlog(config) {
    this.spinner.show();
    return this._http.get(this.GET_BLOG, {
      params: config
    });
  }

  deleteBlog(data) {
    this.spinner.show();
    return this._http.post(this.DELETE_BLOG, JSON.stringify(data), {
      headers: new Headers({ "Content-Type": "application/json" })
    });
  }
}
