import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from "../../services/admin.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Project } from "../../models/project";

@Component({
  selector: "app-admin-project",
  templateUrl: "./admin-project.component.html",
  styleUrls: ["./admin-project.component.css"]
})
export class AdminProjectComponent implements OnInit {
  projectForm: FormGroup;
  getProjectForm: FormGroup;
  isProjectFormVisible: boolean = false;
  project: Project;

  active = "add";
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.projectForm = this.createProjectForm();
    this.getProjectForm = this.createGetProjectForm();
  }

  createProjectForm() {
    return this.formBuilder.group({
      project_name: ["", Validators.required],
      nav_name: ["", Validators.required],
      nav_data: ["", Validators.required],
      nav_sort: ["", Validators.required]
    });
  }

  createGetProjectForm() {
    return this.formBuilder.group({
      nav_name: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.active.toUpperCase() == "ADD") {
      if (this.projectForm.valid) {
        this.adminService.addProjectData(this.projectForm.value);
      }
    } else {
      //EDIT SCENARIO
      if (this.projectForm.valid) {
        this.adminService.editProjectNavData(this.projectForm.value);
      }
    }
  }

  onGetProjectData() {
    if (this.active.toUpperCase() == "EDIT") {
      if (this.getProjectForm.valid) {
        this.adminService
          .getProjectNavData(this.getProjectForm.value.nav_name)
          .subscribe(res => {
            this.spinner.hide();
            this.isProjectFormVisible = true;
            let data = res.json();
            this.project = {
              project_name: data.project_name,
              nav_name: data.nav_name,
              nav_sort: data.nav_sort,
              nav_data: data.nav_data
            };
            this.projectForm.setValue(this.project);
          });
      }
    } else if (this.active.toUpperCase() == "DELETE") {
      this.adminService
        .deleteProjectNavData(this.getProjectForm.value.nav_name)
        .subscribe(res => {
          this.spinner.hide();
        });
    }
  }
}
