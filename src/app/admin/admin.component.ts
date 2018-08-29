import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminService } from "../services/admin.service";
import { AdminBlogComponent } from "./admin-blog/admin-blog.component";



@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  active = "add";
  @ViewChild(AdminBlogComponent) addBlogComponent;
  constructor() {}

  ngOnInit() {}

  onActive(active) {
    this.active = active;
    this.addBlogComponent.update(this.active);
  }

}
