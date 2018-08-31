import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavService } from "../services/nav.service";
import { Subscription } from "rxjs/Subscription";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: "header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.css"]
})
export class HeaderNavComponent implements OnInit, OnDestroy {
  navs;
  subscription: Subscription;
  toggle = false;

  constructor(
    private navService: NavService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.navService.getNavs().subscribe(navs => {
      this.spinner.hide();
      this.navs = JSON.parse(navs.json());
    });
  }

  navToggle() {
    this.toggle = !this.toggle;
  }

  // here href we are using as id
  trackNavs(index, nav) {
    return nav ? nav.href : undefined;
  }

  selectNav(techName) {
    this.navService.selectNav({blogTech: techName}).subscribe(res => {
      let data = res.json();
      this.router.navigateByUrl(data.blogHref);
      this.spinner.hide();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
