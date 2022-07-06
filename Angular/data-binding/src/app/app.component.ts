import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  id = 10;
  name = 'john'

  allowNewServer = false;
  serverCreation = "No server Created";
  data = "This is Two way Binding..";
  showContent = false;
  serverStatus: string = 'online';
  servers = ['test1','test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(Math.random())
  }

  onCreateSrever() {
    this.serverCreation = "Server was created";
   

  }

  typing(event: any) {
    console.log(event);
    this.data = event.target.value;
  }

  apply() {
    this.showContent = true;
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
