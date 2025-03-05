import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineLoginService } from '../services/online-login.service';

@Component({
  selector: 'app-signin-online',
  templateUrl: './signin-online.component.html',
  styleUrls: ['./signin-online.component.css']
})
export class SigninOnlineComponent {

  email: string = '';
  password: string = '';

  constructor(private onlineLoginService: OnlineLoginService, private router: Router) { }

  onSubmit() {
    if (this.email && this.password) {
      const loginData = { email: this.email, password: this.password };
      
      this.onlineLoginService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          alert('Login Successful!');
          this.router.navigate(['/e-com']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Invalid email or password');
        }
      });
    } else {
      alert('Please enter your email and password');
    }
  }
}
