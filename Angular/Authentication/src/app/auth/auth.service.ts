import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from '@angular/router';


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    loacalId: string;
    registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;
    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIAXuK08QZv53SrVXxPb0QJFSYveFD8uI",
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            )
            .pipe(
                catchError(this.handlingError),
                tap((resData) => {
                    this.handleAuth(resData.email, resData.loacalId, resData.idToken, +resData.expiresIn)
                })
            );
    }

    logIn(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIAXuK08QZv53SrVXxPb0QJFSYveFD8uI",
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            )
            .pipe(catchError(this.handlingError),
                tap((resData) => {
                    this.handleAuth(resData.email, resData.loacalId, resData.idToken, +resData.expiresIn)
                }));
    }


    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth'])
        localStorage.removeItem('userData');
        if (!this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }

    private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handlingError(errorRes: HttpErrorResponse) {
        let errorMessage = "An unknown error occurred!";
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "This email exist already";
                break;
            case "EMAIL_NOT_FOUND":
                errorMessage = "This email is not found";
                break;
            case "INVALID_PASSWORD":
                errorMessage = "You entered Invalid Passwor, Try Again!";
                break;
            case "USER_DISABLED":
                errorMessage = "Your Account is Disabled";
        }
        return throwError(errorMessage);
    }
}
