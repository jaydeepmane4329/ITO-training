import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  even:number[] = [];
  odd:number[] = [];

  increament(count:number){
    if(count%2 === 0){
      this.even.push(count);
    }else{
      this.odd.push(count);
    }
  }
}
