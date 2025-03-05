import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  homeData!: string;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomePageData().subscribe(data => {
      this.homeData = data;
    });
  }
}