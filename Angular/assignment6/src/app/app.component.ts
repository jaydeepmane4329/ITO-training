import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assignment6';
  defaultValue = 'medium'
  submitted = false;

  user = {
    email: '',
    level: '',
    password: '',
  }

  @ViewChild('f') signUpform: NgForm | any;

  onSubmit() {
    console.log(this.signUpform);
    this.submitted = true;

    this.user.email = this.signUpform.value.email;
    this.user.level = this.signUpform.value.level;
    this.user.password = this.signUpform.value.password;
  }

}
