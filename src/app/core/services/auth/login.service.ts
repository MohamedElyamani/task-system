import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn = signal<boolean>(false);
  private TOKEN_KEY = 'token';
  private router = inject(Router);

  constructor() {
      const token = localStorage.getItem(this.TOKEN_KEY);
      this.isLoggedIn.set(!!token);
  }

  login(user: IUser): boolean {
    if (user.email === 'admin@gmail.com' && user.password === '123') {
 
        const dummyToken = 'dummy-token-123';
        localStorage.setItem(this.TOKEN_KEY, dummyToken);
  
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }

  getToken() {
      return localStorage.getItem(this.TOKEN_KEY);
  }

}
