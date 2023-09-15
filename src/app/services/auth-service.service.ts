import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private loggedIn = false;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'ilovedojo123') {
      return of(true).pipe(
        delay(2000),
        tap(() => {
          localStorage.setItem('isLoggedIn', 'true');
          this.loggedIn = true;
        })
      );
    } else {
      
      return throwError('Invalid username or password').pipe(
        delay(3000),
        catchError((error) => {
          this.loggedIn = false;
          return throwError(error);
        })
      );
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
