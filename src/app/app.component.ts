import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dropdownVisible = false;

  // Toggles the dropdown visibility
  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
