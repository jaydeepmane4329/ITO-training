import { Component, Input } from '@angular/core';
import { AccountsServices } from '../accounts.service';
import { Service } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [Service]
})
export class AccountComponent {
  @Input() account: { name: string; status: string; } | any;
  @Input() id: any;

  constructor( private accountServices: AccountsServices) { }

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    // this.service.loggging(status);
    this.accountServices.updateStatus(this.id, status)
    this.accountServices.statusUpdated.emit(status);
  }
}
