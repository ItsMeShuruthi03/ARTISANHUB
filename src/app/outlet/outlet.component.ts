import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})


export class OutletComponent implements OnInit{

  JugTownPottery: string = 'JugTown Pottery';
  DecorativeElephantFigurine: string = 'Decorative Elephant Figurine';
  EmbracingLoveSculpture :string = 'EmbracingLoveSculpture'
  SunsetFalling:string = 'SunsetFalling'
  AcrylicPaintingRadhaKrishna:string = 'AcrylicPaintingRadhaKrishna';
  ArtisticFlairAbstractDesignModernGirl:string ='ArtisticFlairAbstractDesignModernGirl';
  IntegrityEastFrok:string ='IntegrityEastFrok';
  EastFrok:string ='EastFrok';
  DIPPINGTONGS4:string ='DIPPINGTONGS4';
  HANDLEMAKERTOOLS:string ='HANDLEMAKERTOOLS';
  WOODMODELLINGTOOLS:string ='WOODMODELLINGTOOLS';
  ADJUSTABLEPOTTERYWHEELGAUGE:string ='ADJUSTABLEPOTTERYWHEELGAUGE';


  JugTownPotteryForPrice: number = 1300;
  DecorativeElephantFigurineForPrice: number = 500;
  EmbracingLoveSculptureForPrice: number = 5000;
  SunsetFallingForPrice: number = 600;
  AcrylicPaintingRadhaKrishnaForPrice: number = 2200;
  ArtisticFlairAbstractDesignModernGirlForPrice: number = 2999;
  IntegrityEastFrokForPrice: number = 220;
  EastFrokForPrice: number = 500;
  DIPPINGTONGS4ForPrice: number = 1000;
  HANDLEMAKERTOOLSForPrice: number = 1999;
  WOODMODELLINGTOOLSForPrice: number = 2000;
  ADJUSTABLEPOTTERYWHEELGAUGEForPrice: number = 3500;

  cartValue: any[] = [];
  visible: boolean = false;
  
  constructor(private router: Router) {}  // Inject Router
  ngOnInit(): void {
    throw new Error('Method not implemented.');    
  }

  buyNow() {
    // Navigate to the payment page, passing any required data
    this.router.navigate(['/payment-modal']);
  }

  addCart(productPrice: any, productName: any) {
    // console.log('Product Moving to cart ', products, 'Product Name ', productName);

    this.cartValue.push({ productname: productName, productprice: productPrice });

    Swal.fire({
      toast: true,
      position: 'top-end', // Top-right corner
      icon: 'success',
      title: `${productName} added to cart!`,
      showConfirmButton: false,
      timer: 3000,  // 3 seconds
      timerProgressBar: true
    });
  
  }

  show() {
    this.visible = true;
  }

  moveToPayment() {
    let totalPrice = 0;
    this.cartValue.forEach((item: any) => {
      totalPrice += item.productprice;
    });
    console.log('Total Price:', totalPrice);
    sessionStorage.setItem('amount', totalPrice.toString());
    this.router.navigate(['/payment-modal']);
  }
  

  
  
}
