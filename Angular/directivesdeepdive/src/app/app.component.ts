import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesdeepdive';
  less:boolean = true;

  toggle(){
      if(this.less){
        this.less = false;
      }else{
        this.less = true;
      }
  }
}
