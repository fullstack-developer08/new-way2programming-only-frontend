import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AdminService } from "../../services/admin.service";
import { Blog } from "../../models/blog";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "admin-blog",
  templateUrl: "./admin-blog.component.html",
  styleUrls: ["./admin-blog.component.css"]
})
export class AdminBlogComponent implements OnInit {
  addOrEditBlogForm: FormGroup;
  getOrDeleteBlogForm: FormGroup;
  blog: Blog;
  message: string;
  isEditFormVisible = false;

  @Input("active")
  active;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.addOrEditBlogForm = this.createAddOrEditBlogForm(this.active);
    this.getOrDeleteBlogForm = this.createGetOrDeleteForm();
  }

  update(active) {
    this.addOrEditBlogForm = this.createAddOrEditBlogForm(active);
    this.getOrDeleteBlogForm = this.createGetOrDeleteForm();
  }

  private createAddOrEditBlogForm(active) {
    if (active == "add") {
      return this.formBuilder.group({
        blogTech: ["", Validators.required],
        blogName: ["", Validators.required],
        blogHref: ["", Validators.required],
        blogData: ["", Validators.required]
      });
    } else if (active == "edit") {
      return this.formBuilder.group({
        sort: [""],
        blogTitle: [""],
        blogDesc: [""],
        blogKeyword: [""],
        blogTech: ["", Validators.required],
        blogName: ["", Validators.required],
        blogHref: ["", Validators.required],
        blogData: ["", Validators.required]
      });
    }
  }

  createGetOrDeleteForm() {
    return this.formBuilder.group({
      blogHref: ["", Validators.required]
    });
  }

  onGetOrDeleteBlog() {
    if (this.getOrDeleteBlogForm.valid) {
      if (this.active == "edit") {
        this.adminService
          .getBlog({ blogHref: this.getOrDeleteBlogForm.value.blogHref })
          .subscribe(blog => {
            this.spinner.hide();
            let blogData = blog.json();
            if (blog && blogData === "oops no href found in database!") {
              this.isEditFormVisible = false;
              this.message = 'No Record found in databases!';
            } else {
              this.isEditFormVisible = true;
              this.blog = {
                sort: blogData.sort,
                blogTitle: blogData.blogTitle,
                blogDesc: blogData.blogDesc,
                blogKeyword: blogData.blogKeyword,
                blogTech: blogData.blogTech,
                blogName: blogData.blogName,
                blogHref: blogData.blogHref,
                blogData: blogData.blogData
              };
              this.addOrEditBlogForm.setValue(this.blog);
            }
          });
      } else {
        this.adminService
          .deleteBlog(this.getOrDeleteBlogForm.value)
          .subscribe(message => {
            this.spinner.hide();
            let m = message.json();
            if (m == "success") {
              this.message = m;
            }
          });
      }
    }
  }

  onAddOrEditBlog() {
    if (this.addOrEditBlogForm.valid) {
      if (this.active == "add")
        this.adminService.addBlog(this.addOrEditBlogForm.value);
      else if (this.active == "edit")
        this.adminService.editBlog(this.addOrEditBlogForm.value);
    }
  }
}
