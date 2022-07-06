import { Component } from "@angular/core";

@Component({
    selector: "app-servers",
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],

})

export class ServersComponent {
    showPassword = true;
    timeStamps: any = [];
    title = 'Display details'
    count = 0;
    show() {
        if (this.showPassword) {
            this.showPassword = false;
            this.title = 'Display details'
        } else {
            this.showPassword = true;
            this.title = 'hide details'
        }
        this.count++;
        this.timeStamps.push(this.count)
        console.log(this.timeStamps);
    }

    

}