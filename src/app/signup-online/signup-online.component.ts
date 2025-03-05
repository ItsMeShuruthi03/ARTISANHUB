import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineLoginService } from '../services/online-login.service';  // Import the service

@Component({
  selector: 'app-signup-online',
  templateUrl: './signup-online.component.html',
  styleUrls: ['./signup-online.component.css']
})
export class SignupOnlineComponent {
[x: string]: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private onlineLoginService: OnlineLoginService, private router: Router) { }

  onSubmit() {
    if (this.firstName && this.lastName && this.email && this.password) {
      // Prepare user data for registration
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      
      // Call the register service
      this.onlineLoginService.register(userData).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          alert('Registration Successful! You can now log in.');
          this.router.navigate(['/signin-online']);  // Redirect to login page after registration
        },
        error: (err: any) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields');
    }
  }
}
