import { Component } from '@angular/core';
import { AccountsServices } from '../accounts.service';
import { Service } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Dependacy injector
  // providers: [Service]
})
export class NewAccountComponent {
  constructor(private accountService: AccountsServices) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        alert(`new Status ${status}`);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);

    // Depandacy Injector..
    this.accountService.addAccount(accountName, accountStatus);
    // this.service.loggging(accountStatus);

  }
}
