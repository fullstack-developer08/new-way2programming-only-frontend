import { Component, OnInit } from "@angular/core";

@Component({
  selector: "project-practice",
  templateUrl: "./project-practice.component.html",
  styleUrls: ["./project-practice.component.css"]
})
export class ProjectPracticeComponent implements OnInit {
  createNewProject: string;
  installingBootstrap: string;
  defineRoutes: string;
  bsDropDownWithNgBootstrap: string;
  active = "1";
  deployToFirebase: string;
  googleLoginWithFirebase: string;
  protectingRoutes: string;
  redirectUserAfterLoginning: string;
  storingUsersInFirebase: string;

  constructor() {}

  ngOnInit() {
    this.createNewProject = `
<h5>create new project in system</h5>
                  <pre>
> ng new PROJECT_NAME
                  </pre>

                  <h5>create new project in firebase</h5>
                  <p>
                    Go to <a href="https://console.firebase.google.com/" target="_blank">Firebase console</a> and Add new project.
                  </p>

                  <h5>Get started by adding firebase to your app</h5>
                  <p>
                    copy config property from firebase app to your angular app inside environment.ts and environment.prod.ts
                  </p>
                  <pre>
config = {{ '{' }}
  apiKey: "asdasdadadasdsadsadadsadadasd--KU",
  authDomain: "asdas.firebaseapp.com",
  databaseURL: "https://asdsadsa.firebaseio.com",
  projectId: "oshop27aug",
  storageBucket: "oadasdasdsad",
  messagingSenderId: "asdsad"
  {{ '}' }}
                  </pre>
                  <p>Now your environment.ts and environment.prod.ts should be look like below format.</p>
                  <pre>
//environment.ts
export const environment = {{ '{'  }}
  production: false,
  firebase: {{ '{' }}
  apiKey: "asdasdadadasdsadsadadsadadasd--KU",
  authDomain: "asdas.firebaseapp.com",
  databaseURL: "https://asdsadsa.firebaseio.com",
  projectId: "oshop27aug",
  storageBucket: "oadasdasdsad",
  messagingSenderId: "asdsad"
  {{ '}' }}
{{ '}' }};


//environment.prod.ts
export const environment =  {{ '{' }}
  production: true,
  firebase: {{ '{' }}
  apiKey: "asdasdadadasdsadsadadsadadasd--KU",
  authDomain: "asdas.firebaseapp.com",
  databaseURL: "https://asdsadsa.firebaseio.com",
  projectId: "oshop27aug",
  storageBucket: "oadasdasdsad",
  messagingSenderId: "asdsad"
  {{ '}' }}
{{ '}' }};

                  </pre>

                  <h5>Now need to install couple of packages </h5>
                  <pre>
npm install --save firebase@4.2.0 angularfire2@4.0.0-rc.1
                  </pre>

                  <h5>Configure firebase in our app</h5>
                  <pre>
//app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

                  </pre>
                  `;

    this.installingBootstrap = `
  <h5>Installing package</h5> 
                    <pre>
> npm install --save bootstrap
                     </pre>
                     <h5>Adding CSS</h5>
                     <p>Go to style.css file and import the bootstrap css file</p>
                     <pre>
//style.css
@import '~bootstrap/dist/css/bootstrap.min.css';
                     </pre>
  `;

    this.defineRoutes = ` <pre>
  import { BrowserModule } from "@angular/platform-browser";
  import { NgModule } from "@angular/core";
  
  import { AngularFireModule } from "angularfire2";
  import { AngularFireDatabaseModule } from "angularfire2/database";
  import { AngularFireAuthModule } from "angularfire2/auth";
  import { RouterModule } from "@angular/router";
  
  import { AppComponent } from "./app.component";
  import { environment } from "../environments/environment";
  import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
  import { HomeComponent } from "./home/home.component";
  import { ProductsComponent } from "./products/products.component";
  import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
  import { CheckOutComponent } from "./check-out/check-out.component";
  import { OrderSuccessComponent } from "./order-success/order-success.component";
  import { MyOrdersComponent } from "./my-orders/my-orders.component";
  import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
  import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
  import { LoginComponent } from './login/login.component';
  
  @NgModule({
    declarations: [
      AppComponent,
      BsNavbarComponent,
      HomeComponent,
      ProductsComponent,
      ShoppingCartComponent,
      CheckOutComponent,
      OrderSuccessComponent,
      MyOrdersComponent,
      AdminProductsComponent,
      AdminOrdersComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      RouterModule.forRoot([
        { path: "", component: HomeComponent },
        { path: "products", component: ProductsComponent },
        { path: "shopping-cart", component: ShoppingCartComponent },
        { path: "check-out", component: CheckOutComponent },
        { path: "order-success", component: OrderSuccessComponent },
        { path: "login", component: LoginComponent },
        { path: "my/orders", component: MyOrdersComponent },
        { path: "admin/products", component: AdminProductsComponent },
        { path: "admin/orders", component: AdminOrdersComponent }
      ])
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
                                      
                                   </pre>`;

    this.bsDropDownWithNgBootstrap = `

  <h5>Installing packages</h5>
  <pre>
npm install --save @ng-bootstrap/ng-bootstrap@1.0.0-beta.4 (required for angular4)
  </pre>

  <h5>imports the Module</h5>
  <pre>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
BrowserModule,
NgbModule.forRoot(),
]
  </pre>

  <h5>Using dropdown from ng-bootstrap</h5>
  <pre>
&lt;li ngbDropdown class="nav-item dropdown">
&lt;a ngbDropdownToggle class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
aria-expanded="false">Dropdown&lt;/a>
&lt;div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
&lt;a class="dropdown-item" href="#">Action&lt;/a>
&lt;a class="dropdown-item" href="#">Another action&lt;/a>
&lt;a class="dropdown-item" href="#">Something else here&lt;/a>
&lt;/div>
&lt;/li>
  </pre>
  
  `;

    this.deployToFirebase = `

    <h5>Install firebase tools globally first</h5>
    <pre>
> npm install -g --save firebase-tools
    </pre>


    <h5>then login to firebase</h5>
    <pre>
> firebase login
    </pre>

    <h5>Once login, go to project folder and then run</h5>
    <pre>
//(this cmd will ask us which firebase project we want to associate to this project)
> firebase init hosting 
    </pre>

    <h5>run prod build</h5>
    <pre>
> ng build --prod
    </pre>

    <h5>Deploy to firebase</h5>
    <pre>
> firebase deploy
    </pre>

    `;

    this.googleLoginWithFirebase = `
  
  <p>First we need to enable the google authentication in firebase to implement this feature.</p>
  <p>To implement login we are going to use classed in angular fire, angularfire simply an abstraction over firebase library.
    Angularfire has limited support for authentication. In some cases we going to directly work with firebase library.</p>

  <h5>Implementing Google Login</h5>
  <pre>
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
selector: "app-login",
templateUrl: "./login.component.html",
styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
constructor(private afAuth: AngularFireAuth) {}

ngOnInit() {}

//here we are using new operator to create the object that has so many prob we will solve this later
login() {
this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
}
  </pre>

  <h5>Implementing  Google logout</h5>
  <pre>
import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
selector: "bs-navbar",
templateUrl: "./bs-navbar.component.html",
styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
constructor(private afAuth: AngularFireAuth) {
afAuth.authState.subscribe(x => console.log(x));
}

logout() {
this.afAuth.auth.signOut();
}
}
  </pre>

  <h5>Displaying Current user</h5>
  <pre>
//in ts file

import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";

@Component({
selector: "bs-navbar",
templateUrl: "./bs-navbar.component.html",
styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
user: firebase.User;
constructor(private afAuth: AngularFireAuth) {
afAuth.authState.subscribe(user => (this.user = user));
}

logout() {
this.afAuth.auth.signOut();
}
}

//in markup file
&lt;li ngbDropdown *ngIf="user" class="nav-item dropdown">
&lt;a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user.displayName}}&lt;/a>
&lt;div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
    &lt;a class="dropdown-item" routerLink="/my/orders">My Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/orders">Manage Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/products">Manage Products&lt;/a>
    &lt;a class="dropdown-item" (click)="logout()">Logout&lt;/a>
&lt;/div>
&lt;/li>
      
  </pre>
  <p>Abobe approach has one problem, we are subscrbing observable but we did not unsubscribes it.</p>
  <p>We should always unsubscribe the firebase observable because when we works with firebase we deeling with asyncronous stream of data which is diffrent consuming http services.</p>
  <p>when we works with http service and when we subscribes http class of angular angular is going to automatically terminate or complete that observable so don't have to explicitly unsubscribe it.</p>
  <p>We have to way to unsubscribe the observable, first is onDestroy interface and another is async pipe, which is simpler and cleaner.</p>
  <pre>
//in ts file

import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";

@Component({
selector: "bs-navbar",
templateUrl: "./bs-navbar.component.html",
styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
user$: Observable<firebase.User>;
constructor(private afAuth: AngularFireAuth) {
this.user$ = afAuth.authState;
}

logout() {
this.afAuth.auth.signOut();
}
}


//in markup file

&lt;ng-template #anonymousUser>
&lt;li class="nav-item">
    &lt;a class="nav-link" routerLink="/login">Login&lt;/a>
&lt;/li>
&lt;/ng-template>
&lt;li ngbDropdown *ngIf="user$ | async as user; else anonymousUser" class="nav-item dropdown">
&lt;a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user.displayName}}&lt;/a>
&lt;div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
    &lt;a class="dropdown-item" routerLink="/my/orders">My Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/orders">Manage Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/products">Manage Products&lt;/a>
    &lt;a class="dropdown-item" (click)="logout()">Logout&lt;/a>
&lt;/div>
&lt;/li>
  </pre>
  
  <p>In above example authentication works but it has tight coupling inside component.</p>
  <p>Our component is tightly coupled with the firebase so it is not easy to test and it has another problem callled lack of seperation of concern.</p>
  <pre>
//auth.service.ts

import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
user$: Observable&lt;firebase.User>;
constructor(public afAuth: AngularFireAuth) {
this.user$ = afAuth.authState;
}

login() {
this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

logout() {
this.afAuth.auth.signOut();
}
}


//login.component.ts

import { Component, OnInit } from "@angular/core";

import { AuthService } from "../services/auth.service";

@Component({
selector: "app-login",
templateUrl: "./login.component.html",
styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
constructor(private authService: AuthService) {}

ngOnInit() {}

login() {
this.authService.login();
}
}


//bs-navbar.component.ts


import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";

@Component({
selector: "bs-navbar",
templateUrl: "./bs-navbar.component.html",
styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {

constructor(private authService: AuthService) {

}

logout() {
this.authService.logout();
}
}


//bs.navbar.component.html

&lt;ng-template #anonymousUser>
&lt;li class="nav-item">
    &lt;a class="nav-link" routerLink="/login">Login&lt;/a>
&lt;/li>
&lt;/ng-template>
&lt;li ngbDropdown *ngIf="authService.user$ | async as user; else anonymousUser" class="nav-item dropdown">
&lt;a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user.displayName}}&lt;/a>
&lt;div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
    &lt;a class="dropdown-item" routerLink="/my/orders">My Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/orders">Manage Orders&lt;/a>
    &lt;a class="dropdown-item" routerLink="/admin/products">Manage Products&lt;/a>
    &lt;a class="dropdown-item" (click)="logout()">Logout&lt;/a>
&lt;/div>
&lt;/li>
  </pre>


  `;

    this.protectingRoutes = `
  
  
  <p>We want to protect some routes that user can not access only authorized or admin can access in order to achieve we need to create auth-gaurd service.</p>
  <p>We need to implements CanActivate interface inside the our auth-gaurd service.</p>
  <p>This interface requires the canActivate() function or method to work properly.</p>
  <p>canActivate() method should return true or false. if return true it means authorized access if it will return false it means unauthorized access.</p>
  <h5>auth-gaurd.service.ts</h5> 
  <pre>
    <span class="text-danger">
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {

constructor(private authService: AuthService, private router: Router) { }

canActivate() {
this.authService.user$.subscribe(user => {
  if(user) return true;
  this.router.navigate(['/login']);
  return false;
})
}
}
</span>         
   </pre>

   <p>The problem with above implementaion is we can not unsubscribe it because OnDestoy will be be avaialable inside services. It will be avaialable inside the component.</p>
   <p>canActivate method can return Observable of boolean, Promise of boolean and boolean.</p>
   <p>And we are having return type inside the observable so it will return the value some time in future not immideatl upon calling this canActivate() method.</p>
   <p>Instead of subscribe the user$, we will call map operator.</p>
   <p>We are going to transform this observable in user$ object into a boolean. </p>
   <p>And angular will internally subscribes to this observable and remove the subscription later.</p>
   <h5>auth-gaurd.service.ts</h5>
   <pre>
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGaurd implements CanActivate {

constructor(private authService: AuthService, private router: Router) { }

canActivate() {
 return this.authService.user$.map(user => {
   if(user) return true;
   
   this.router.navigate(['/login']);
   return false;
 })
}
}
   </pre>

   <h5>app.module.ts(with canActivate: used to protect route)</h5>
   <pre>
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "./services/auth.service";
import { AuthGaurd } from "./services/auth-gaurd.service";

@NgModule({
declarations: [
 AppComponent,
 BsNavbarComponent,
 HomeComponent,
 ProductsComponent,
 ShoppingCartComponent,
 CheckOutComponent,
 OrderSuccessComponent,
 MyOrdersComponent,
 AdminProductsComponent,
 AdminOrdersComponent,
 LoginComponent
],
imports: [
 BrowserModule,
 AngularFireModule.initializeApp(environment.firebase),
 AngularFireDatabaseModule,
 AngularFireAuthModule,
 NgbModule.forRoot(),
 RouterModule.forRoot([
   { path: "", component: HomeComponent },
   { path: "products", component: ProductsComponent },
   { path: "shopping-cart", component: ShoppingCartComponent },
   { path: "check-out", component: CheckOutComponent, canActivate: [AuthGaurd] },
   { path: "order-success", component: OrderSuccessComponent },
   { path: "login", component: LoginComponent },
   { path: "my/orders", component: MyOrdersComponent },
   { path: "admin/products", component: AdminProductsComponent },
   { path: "admin/orders", component: AdminOrdersComponent }
 ])
],
providers: [AuthService, AuthGaurd],
bootstrap: [AppComponent]
})
export class AppModule {}
   </pre>
  
  
  
  `;

    this.redirectUserAfterLoginning = `
  

  <p>canActivate() takes two params, first is route and second is state, using state.url we can get url from which url
  user logged in.</p>
<p>Why we need the requirement to route and state parameters of canActivate method, the reason is can activate can
  we apply to multiple urls that redirect user to login page. user can login from check-out, order-success to get
  the state of login page we use state params.</p>

<pre>
//auth-gaurd.service.ts


import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGaurd implements CanActivate {

constructor(private authService: AuthService, private router: Router) { }

canActivate(route, state: RouterStateSnapshot) {
return this.authService.user$.map(user => {
if(user) return true;

this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
return false;
})
}

}



//auth.service.ts

import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class AuthService {
user$: Observable<firebase.User>;
constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) {
this.user$ = afAuth.authState;
}

login() {
//here safe to use snapshot because we do not have navigation likes previous and next in our login page.
//so route parameters not gonna change with single instance of login component in the DOM.
let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
localStorage.setItem('returnUrl', returnUrl);
this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

logout() {
this.afAuth.auth.signOut();
}
}


//app.component.ts
import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.css"]
})
export class AppComponent {
//here we have subscribe with no unsubscribe
//does not matter because AppComponent is the root component of our application so we have single instance of this in the DOM
constructor(private authService: AuthService, private router: Router) {
authService.user$.subscribe(user => {
if (user) {
let returnUrl = localStorage.getItem("returnUrl");
router.navigateByUrl(returnUrl);
}
});
}
}
</pre>
  
  
  `;



  }
}
