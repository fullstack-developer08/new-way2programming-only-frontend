import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { FooterComponent } from "./footer/footer.component";
import { BlogComponent } from "./blog/blog.component";
import { AdminComponent } from "./admin/admin.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

import { NavService } from "./services/nav.service";
import { BlogService } from "./services/blog.service";

import { ContactService } from "./services/contact.service";
import { ProjectPracticeComponent } from "./project-practice/project-practice.component";
import { LoginComponent } from "./login/login.component";
import { AuthGaurd } from "./services/auth-gaurd.service";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminService } from "./services/admin.service";
import { AdminBlogComponent } from "./admin/admin-blog/admin-blog.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    BlogComponent,
    AdminComponent,
    ContactComponent,
    HomeComponent,
    ProjectPracticeComponent,
    LoginComponent,
    AdminBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home/contact", component: ContactComponent },
      { path: "project-practice", component: ProjectPracticeComponent },
      {
        path: "home/admin",
        component: AdminComponent,
        canActivate: [AuthGaurd]
      },
      { path: "home/login", component: LoginComponent },
      { path: "**", component: BlogComponent }
    ])
  ],
  providers: [NavService, BlogService, ContactService, AuthGaurd, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
