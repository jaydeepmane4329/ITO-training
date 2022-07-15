import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
})
export class ActiveUsersComponent implements OnInit {
   
 inactiveUsers:string[] = [];
  constructor(private userServices:UserServices) { }

  ngOnInit(): void {
    this.inactiveUsers = this.userServices.Activeusers;
  }

  onSetToInactive(id:number){
    this.userServices.pushToActive(id);
  }
}
