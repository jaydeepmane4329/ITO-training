export class UserServices {
    Activeusers = ['max', 'set to inactive'];

    inActiveUsers = ['jack', 'set to active'];

    pushToInactive(id: number) {
        this.inActiveUsers.push(this.inActiveUsers[id]);
        this.Activeusers.splice(id, 1);
    }

    pushToActive(id: number) {
        this.Activeusers.push(this.Activeusers[id]);
        this.inActiveUsers.splice(id, 1);
    }
}