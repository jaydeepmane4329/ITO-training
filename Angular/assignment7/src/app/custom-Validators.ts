import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static InvalidProjectName(control: FormControl): { [s: string]: boolean } | null {
        if (control.value === 'test') {
            return { 'invaldProjectName': true }
        }
        return null
    }

    static asyncInvalidProjectName(control: FormControl<any>): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'TestProjectName') {
                    resolve({ 'invaldProjectName': true });
                } else {
                    resolve(null);
                }
            }, 2000)
        })
        return promise;
    }
}