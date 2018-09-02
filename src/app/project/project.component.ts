import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdminService } from "../services/admin.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  projectData;
  projectName;
  projectActiveLink = 0;

  constructor(
    private activateRoute: ActivatedRoute,
    private adminService: AdminService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(data => {
      this.projectName = data.get("projectName");
      this.adminService.getProjectData(this.projectName).subscribe(
        res => {
          this.projectData = res.json();
          this.spinner.hide();
        },
        err => {
          this.spinner.hide();
        }
      );
    });
  }
}
