export interface Payment {
    id?: number; // Optional as this will be auto-generated
    paymentMode: string;
    transactionNumber: string;
    transactionDate: Date | null;
    amount: number;
  }
  