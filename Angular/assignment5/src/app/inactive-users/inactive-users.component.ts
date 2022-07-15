import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
})
export class InactiveUsersComponent implements OnInit {

  users: string[] = [];
  constructor(private userServices: UserServices) { }

  ngOnInit(): void {
    this.users = this.userServices.inActiveUsers;
  }


  onSetToActive(id: number) {

  }


}
