import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  onContinue(form: any) {
    if (form.valid) {
      const user = form.value;
      this.userService.registerUser(user).subscribe(
        response => {
          console.log('User registered', response);
          this.snackBar.open('Registration completed successfully!', 'Close', { duration: 3000 });
          this.openDialog();
        },
        error => {
          console.error('Registration failed', error);
          this.snackBar.open('Registration failed. Please try again.', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.snackBar.open('Please fill in all required fields.', 'Close', { duration: 3000 });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed', result);
    });
  }
}
