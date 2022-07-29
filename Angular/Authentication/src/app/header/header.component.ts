import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated: boolean = false;
  private userSub: Subscription;


  constructor(private dataStorageService: DataStorageService, private authService: AuthService,) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  onLogout() {
    this.authService.logout();
    
  }


  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
    // this.isAuthenticated = false;
  }
}