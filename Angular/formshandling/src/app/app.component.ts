import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm | any;
  defaultQuestion: string = 'pet';
  data = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',

  }

  //  Setting value
  // suggestUserName() {
  //   const suggestUserName = 'SuperStar';
  //   this.signupForm.setValue({
  //     userData: {
  //       username: suggestUserName,
  //       email: ''
  //     },
  //     secret: '',
  //     data: '',
  //     gender: ''
  //   })
  // }

  // Patching value
  suggestUserName() {
    this.signupForm.form.patchValue({
      userData: {
        username: 'jay'
      }
    })
  }

  // onSubmit(form:NgForm){
  //  console.log(form);
  // }

  onSubmit() {
    // console.log(this.signupForm.value.userData.userName);
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret,
      this.user.answer = this.signupForm.value.data;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset()
  }


}
