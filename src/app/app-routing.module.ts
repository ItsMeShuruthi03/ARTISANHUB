import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { CeramicLabComponent } from './ceramic-lab/ceramic-lab.component';
import { SigninOnlineComponent } from './signin-online/signin-online.component';
import { EComComponent } from './e-com/e-com.component';
import { EComcontactComponent } from './e-comcontact/e-comcontact.component';
import { OutletComponent } from './outlet/outlet.component';
import { SignupOnlineComponent } from './signup-online/signup-online.component';
import { InstructorExperienceComponent } from './instructor-experience/instructor-experience.component';



const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'payment-modal', component: PaymentModalComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'instructor-experience', component: InstructorExperienceComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'ceramic-lab', component: CeramicLabComponent },
  { path: 'signin-online', component: SigninOnlineComponent },
  { path: 'signup-online', component: SignupOnlineComponent },
  { path: 'e-com', component: EComComponent },
  { path: 'payment-modal', component: PaymentModalComponent },
  { path: 'outlet', component: OutletComponent },
  { path: 'e-comcontact', component: EComcontactComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }, // Default redirect route
  { path: '**', redirectTo: '/main-page' } // Wildcard route for handling undefined paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
