import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { CartService } from '../cart/cart.service';
import { Form } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import payments from 'razorpay/dist/types/payments';

declare const Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  myCart: any[];
  constructor(
    private service: CheckoutService,
    private se: CartService,
    private formBuilder: FormBuilder
  ) {
    this.myCart = this.service.getCartItems();
    console.log(this.myCart);
  }


  openTransactionModel(response: any) {
    const options = {
      key_id: 'your_razorpay_key_id',
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'hemanath',
      description: 'Payment of online shopping',
      image:
        'https://img.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg',
      prefill: {
        name: 'SS',
        email: 'hemanathsd@gmail.com',
        contact: '9751318371',
      },
      handler: (response: any) => {
        if (response != null && response.razorpay_payment_id != null)
          this.processResponse(response);
        else alert('Payment failed..');
      },
      notes: {
        address: 'Book the person and Cook your food',
      },
      theme: {
        color: '#F37254',
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
    };

    let razorpayObject: any = new Razorpay(options);
    razorpayObject.open();
  }
  processResponse(response: any) {
    console.log(response);
  }

  pay() {
    this.service.createOrder(this.Amount).subscribe({
      next: (response) => {
        this.openTransactionModel(response);
      },
    });
  }
  Amount: number;
  checkoutForm: FormGroup;
  selectedPaymentMode: string;
  PaymentMethod: string;

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      PaymentMethod: ['', Validators.required],
      totalPrice: [this.Amount, Validators.required],
    });
    this.get();
  }

  get() {
    this.se.getAmount().subscribe((data) => {
      this.Amount = data;
    });
  }

  selectPaymentMode(mode: string) {
   // console.log(mode);
    
    this.selectedPaymentMode = mode;
    this.checkoutForm.value.PaymentMethod = mode;
    //console.log(this.checkoutForm.value.PaymentMethod);
    
  }

  onSubmit() {
    //this.checkoutForm.value.PaymentMethod
    // Handle form submission
    localStorage.removeItem('MyCart');
    console.log(this.checkoutForm.value);
    this.checkoutForm.value.totalPrice = this.Amount;
  
    console.log(  this.myCart[0]);
     



    // this.service.post().subscribe(() => {});
  }

  formData = {
    userId: '',
    branchId: '',
    products: [{ productId: '', quantity: '' }],
    totalPrice: '',
    fullName: '',
    phone: '',
    email: '',
    pinCode: '',
    fullAddress: '',
    paymentMethod: '',
  };


}
