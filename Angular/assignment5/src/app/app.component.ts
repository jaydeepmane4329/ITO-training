import { Component, OnInit } from '@angular/core';
import { UserServices } from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServices]
})
export class AppComponent implements OnInit {
  title = 'assignment5';

  activeUsers: { name: string, instruction: string }[] = [];
  inActiveUsers: { name: string, instruction: string }[] = [];

  constructor(private userServices: UserServices) { }

  ngOnInit() {
    this.activeUsers = this.userServices.Activeusers
    this.inActiveUsers = this.userServices.inActiveUsers
  }
}
