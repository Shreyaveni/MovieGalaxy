import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthReviewService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthReviewService]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthReviewService, private router: Router) { }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      this.auth.login(this.username, this.password).subscribe(
        (status) => {
          if (status === 200) {
            this.router.navigate(['home']);
          } else if (status === 403) {
            this.errorMsg = 'Invalid Credentials';
          }
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMsg = 'An error occurred during login';
        }
      );
    }
  }
}
