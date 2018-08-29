import { Component, OnInit, OnDestroy } from "@angular/core";
import { BlogService } from "../services/blog.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { NgxSpinnerService } from "ngx-spinner";
import { Title, Meta } from "@angular/platform-browser";
import { Blog } from "../models/blog";

@Component({
  selector: "blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  blogData: Blog;
  leftNav;
  activeHref;
  keywords;
  desc;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private titleService: Title,
    private meta: Meta
  ) {
    
  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      let url = this.router.url.substring(1);
      this.subscription = this.blogService
        .getBlog({ blogHref: url })
        .subscribe(blogData => {
          this.blogData = blogData.json();
          this.activeHref = this.blogData.blogHref;
          this.keywords = this.blogData.blogKeyword;
          this.desc = this.blogData.blogDesc;
          this.titleService.setTitle(this.blogData.blogName);
          this.blogService
            .getLeftNav({ blogTech: this.blogData.blogTech })
            .subscribe(leftNav => {
              this.leftNav = leftNav.json();
              this.spinner.hide();
            });
        });
    });

    this.meta.addTags([
      {
        name: "author",
        content: "way2programming.com | Arif"
      },
      {
        name: "keywords",
        content: this.keywords
      },
      {
        name: "description",
        content: this.desc
      }
    ]);
  }

  nextPage(href) {
    this.router.navigateByUrl(href);
    this.activeHref = href;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
