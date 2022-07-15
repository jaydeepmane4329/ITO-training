import { EventEmitter, Injectable } from "@angular/core";
import { Service } from "./logging.service";

@Injectable()
export class AccountsServices {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private service: Service) { }

    statusUpdated = new EventEmitter<string>();

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.service.loggging(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.service.loggging(status);
    }
}