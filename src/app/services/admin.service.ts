import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { NgxSpinnerService } from "ngx-spinner";
import {
  BLOG,
  ADD_PROJECT_DATA,
  DELETE_PROJECT_NAV_DATA,
  EDIT_PROJECT_NAV_DATA,
  GET_PROJECT_DATA,
  GET_PROJECT_NAV_DATA,
  URL
} from "../common/const";
import { Helper } from "../common/helper";

@Injectable()
export class AdminService {
  localhost: boolean;
  blog;

  constructor(
    private _http: Http,
    private spinner: NgxSpinnerService,
    helper: Helper
  ) {
    this.localhost = helper.isHostLocal();
    this.blog = this.localhost ? BLOG : BLOG.replace(URL, "");
  }

  addBlog(data) {
    this.spinner.show();
    return this._http
      .post(this.blog, JSON.stringify(data), {
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
      .put(this.blog, JSON.stringify(data), {
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
    return this._http.get(this.blog, {
      params: config
    });
  }

  deleteBlog(data) {
    this.spinner.show();
    return this._http.delete(this.blog, {
      params: { blogHref: data.blogHref }
    });
  }

  addProjectData(data) {
    this.spinner.show();
    return this._http
      .post(
        this.localhost ? ADD_PROJECT_DATA : ADD_PROJECT_DATA.replace(URL, ""),
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

  getProjectData(projectName) {
    this.spinner.show();
    return this._http.get(
      this.localhost ? GET_PROJECT_DATA : GET_PROJECT_DATA.replace(URL, ""),
      {
        params: { project_name: projectName }
      }
    );
  }

  getProjectNavData(navName) {
    this.spinner.show();
    return this._http.get(
      this.localhost
        ? GET_PROJECT_NAV_DATA
        : GET_PROJECT_NAV_DATA.replace(URL, ""),
      {
        params: { nav_name: navName }
      }
    );
  }

  deleteProjectNavData(navName) {
    this.spinner.show();
    return this._http.get(
      this.localhost
        ? DELETE_PROJECT_NAV_DATA
        : DELETE_PROJECT_NAV_DATA.replace(URL, ""),
      {
        params: { nav_name: navName }
      }
    );
  }

  editProjectNavData(data) {
    this.spinner.show();
    return this._http
      .post(
        this.localhost
          ? EDIT_PROJECT_NAV_DATA
          : EDIT_PROJECT_NAV_DATA.replace(URL, ""),
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
