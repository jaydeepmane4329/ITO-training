import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup | any;
  forBiddenUserNames = ['chris', 'anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        // 'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    (<FormArray>this.signUpForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  // Normal custom validator.
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forBiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForBidden': true };
    }
    return null;
  }

  //Asynchronous custom validator.
  forbiddenEmails(control :FormControl) : Promise<any> | Observable<any> | any {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() =>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null)
        }
      },1500 );
    })
    return promise;
  }
}

