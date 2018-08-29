import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: User;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.userData = Object.assign({}, this.userData, this.loginForm.value);
      if(this.userData.username == 'asd-ass-asf-adg' && this.userData.password == 'hhg-uud-rr-fffe-jjj') {
        localStorage.setItem('ald', JSON.stringify(this.userData));
      
        this.router.navigateByUrl('/home/admin');
      } 
    }
  }

}
