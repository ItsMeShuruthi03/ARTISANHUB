import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit{
  visible: boolean = false;
  showUPI: boolean = false;
  showCard: boolean = false;
  selectedPaymentMode!: string;
  transactionNumber!: string;
  transactionDate: Date | null = null;
  amount: any;
  upiId: any;
  bankAccount!: string; // Holds the bank account number
ifscCode!: string; // Holds the IFSC code
  paymentModes: any[] = [
    { label: 'UPI', value: 'upi' },
    { label: 'RTGS', value: 'rtgs' },
    { label: 'NEFT', value: 'neft' },
    { label: 'IMPS', value: 'imps' }
  ];
  visibleOnlinePayment: boolean = false;


  constructor(private paymentService: PaymentService) {} // Inject PaymentService
  ngOnInit(): void {
    const amount = sessionStorage.getItem('amount');
    this.amount = amount;
  }

  // Method to open the payment dialog
  showPayment(): void {
    this.visible = true;
    this.resetFields();
  }

  showOnlinePayment() {
    this.visibleOnlinePayment = true;
  }

  onPaymentModeChange() {
    if (this.selectedPaymentMode === 'upi') {
      this.showUPI = true;
      this.showCard = false;
    } else if (this.selectedPaymentMode === 'card') {
      this.showCard = true;
      this.showUPI = false;
    } else {
      this.showUPI = false;
      this.showCard = false;
    }
  }

  onSubmit(): void {
    const paymentData: Payment = {
      paymentMode: this.selectedPaymentMode,
      transactionNumber: this.transactionNumber,
      transactionDate: this.transactionDate,
      amount: this.amount
    };

    // Ensure the payment service's createPayment method is called properly
    this.paymentService.createPayment(paymentData).subscribe(
      (response: Payment) => {
        console.log('Payment submitted successfully:', response);
        this.visible = false;
        this.resetFields();
      },
      (error) => {
        console.error('Error occurred during payment submission:', error);
      }
    );
  }

  onSubmitOnlinePay() {
    alert('Payment Done Successfully')
  }

  resetFields() {
    this.selectedPaymentMode = '';
    this.transactionNumber = '';
    this.transactionDate = null;
    this.amount = 0;
    this.showUPI = false;
    this.showCard = false;
  }
}
