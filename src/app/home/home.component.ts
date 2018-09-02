import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("way2programming | learn together");
    this.meta.removeTag("name='author'");
    this.meta.removeTag("name='keywords'");
    this.meta.removeTag("name='description'");
    this.meta.addTags([
      {
        name: "author",
        content: "way2programming.com | Arif"
      },
      {
        name: "keywords",
        content: "Angular5, Angular4, java, php, codeigniter-3.0.6, angularjs"
      },
      {
        name: "description",
        content:
          "Essential resources for every Angular developer - way2programming is mainly want to help developers to make code easy and rememberable."
      }
    ]);
  }

  ngOnInit() {}
}
