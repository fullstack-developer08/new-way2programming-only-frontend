import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route, state){
    let ald = JSON.parse(localStorage.getItem('ald'));
    if(ald && ald.username == 'asd-ass-asf-adg' && ald.password == 'hhg-uud-rr-fffe-jjj') {
      return true;
    };
    this.router.navigate(['/home/login']);
    return false;
  }
}
