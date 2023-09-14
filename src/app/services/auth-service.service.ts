import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private loggedIn = false;

  login(username: string, password: string):void {
    if (username === 'user' && password === 'ilovedojo123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLoggedIn') == 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
