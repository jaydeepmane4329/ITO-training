import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {


  isLogin = true;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService, private router: Router) { }


  switch() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>

    if (this.isLogin) {
      authObs = this.authService.signUp(email, password);
    } else {
      authObs = this.authService.logIn(email, password);
    }

    authObs.subscribe(responseData => {
      console.log(responseData);
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    }, error => {
      this.isLoading = false;
      this.error = error;
    })



    form.reset();
  }
}
