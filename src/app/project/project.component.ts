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
          this.doPreActive();
        },
        err => {
          this.spinner.hide();
        }
      );
    });
  }

  doPreActive() {
    setTimeout(function() {
      var pre = document.getElementsByTagName("pre");
      for (var i = 0; i < pre.length; i++) {
        pre[i].className = "rel-pos border border-primary p-3";
        pre[i].id = "clipboard" + i;
        var button = document.createElement("button");
        button.className = "copy-button btn btn-primary";
        button.textContent = "Copy";
        var dataFromPreTag = pre[i].innerText;
        button.setAttribute("data-clipboard-text", dataFromPreTag);
        pre[i].appendChild(button);
      }
    }, 200);
  }
}
