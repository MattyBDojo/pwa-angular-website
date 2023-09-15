import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['home']);
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
