import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for PrimeNG
import { CardModule } from 'primeng/card';
import { CeramicLabComponent } from './ceramic-lab/ceramic-lab.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SignupOnlineComponent } from './signup-online/signup-online.component';
import { SigninOnlineComponent } from './signin-online/signin-online.component';
import { CommonModule } from '@angular/common';
import { EComComponent } from './e-com/e-com.component';
import { EComcontactComponent } from './e-comcontact/e-comcontact.component';
import { OutletComponent } from './outlet/outlet.component';
import { InstructorExperienceComponent } from './instructor-experience/instructor-experience.component';
import { DialogModule } from 'primeng/dialog'; // Import DialogModule
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule
import { CalendarModule } from 'primeng/calendar'; // Import CalendarModule
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    AboutUsComponent,
    MainPageComponent,
    PaymentModalComponent,
    CeramicLabComponent,
    SignupOnlineComponent,
    SigninOnlineComponent,
    EComComponent,
    EComcontactComponent,
    OutletComponent,
    InstructorExperienceComponent,
  ],
  imports: [
    TableModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule,
    BrowserAnimationsModule, // Needed for animations
    CardModule, // Add CardModule here
    MatMenuModule,
    MatButtonModule,
    DynamicDialogModule,
    MatIconModule,
    CommonModule,
    DialogModule, // Add DialogModule here for p-dialog
    DropdownModule, // Add DropdownModule here
    CalendarModule, // Add CalendarModule here
  ],
  providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
