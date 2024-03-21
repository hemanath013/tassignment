import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { CartService } from '../cart/cart.service';
import { Form } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import payments from 'razorpay/dist/types/payments';
import { user } from '../../admin-home/admin-users/admin-users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

declare const Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  myCart: any[];
  user_id:string;
  paymentEnabled: boolean = false;
  checkoutForm: FormGroup;
  Amount: number;
  selectedPaymentMode: string;
  PaymentMethod: string;

  constructor(
    private service: CheckoutService,
    private se: CartService,
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router:Router
  ) {
    this.myCart = this.service.getCartItems();
    // console.log(this.myCart);
    this.user_id = this.service.getUserId();
    // console.log(this.user_id);
    
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
    this.router.navigate(["/cart"])
    // console.log(response);
  }

  pay() {
    this.service.createOrder(this.Amount).subscribe({
      next: (response) => {
        this.openTransactionModel(response);
      },
    });
  }


  ngOnInit(): void {
    this.get(); // Fetch the amount asynchronously if needed
  
    // Initialize the form without setting totalPrice initially
    this.checkoutForm = this.formBuilder.group({
      fullname: ['',[ Validators.required]],
      phone: ['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      address: ['', [Validators.required]],
      PaymentMethod: [''],
      totalPrice: [''], 
    });
  }
  

  get() {
    this.se.getAmount().subscribe((data) => {
      this.Amount = data;
      // this.checkoutForm.get('totalPrice').setValue(this.Amount); // Set totalPrice after fetching the amount
      // this.checkPaymentValidity(); // Check payment validity after setting the totalPrice
    });
  }

  selectPaymentMode(mode: string) {
    this.checkoutForm.get('PaymentMethod').setValue(mode);
    this.selectedPaymentMode = mode;
    // this.checkPaymentValidity(); // Check form validity after setting payment method
  }

  orderPlaced: boolean = false;
  cash: boolean = false;
  onSubmit() {
    localStorage.removeItem('MyCart');
    this.checkoutForm.value.totalPrice = this.Amount;
   
    const product:any[]=[];
    this.myCart.forEach((val)=>{
      product.push({'productId':val.product_id,'name':val.name,'quantity':val.quantity})
      
    })
    this.formData.userId = this.user_id,
    this.formData.products = product,
    this.formData.totalPrice = this.checkoutForm.value.totalPrice,
    this.formData.fullName = this.checkoutForm.value.fullname,
    this.formData.phone = this.checkoutForm.value.phone
    this.formData.email = this.checkoutForm.value.email
    this.formData.pinCode = this.checkoutForm.value.pincode
    this.formData.fullAddress = this.checkoutForm.value.address
    this.formData.paymentMethod = this.checkoutForm.value.PaymentMethod
    // console.log(this.formData.products);
    // console.log(this.formData.totalPrice);

    if(this.checkoutForm.valid){
  this.paymentEnabled = true;
  if(this.cash === true){
   
    
  }else{
    this.pay();
  }
  
  
    }
    else{
      
      Swal.fire({
        title: "OOPS!",
        text: "Please Enter Valid Input",
        icon: "error"
      });
      return
    }

    
    this.service.post(this.formData).subscribe({
      next: (response) => {
        // console.log('Order placed successfully:', response);
        // console.log(this.cash,"cash");
        
        if(this.cash === true){
        this.router.navigate(["/cart"])
        }
        
      },
      error: (error) => {
        console.error('Error placing order:', error);
      }
    });
  }

  formData = {
    userId: '',
    products: [],
    totalPrice: '',
    fullName: '',
    phone: '',
    email: '',
    pinCode: '',
    fullAddress: '',
    paymentMethod: '',
  };


  checkPaymentValidity() {
    if (this.checkoutForm.invalid) {
      // console.log(this.checkoutForm.value);
      // console.log('Form Validity:', this.checkoutForm.valid);
      // console.log(' price:', this.checkoutForm.controls['totalPrice'].valid);

  }
}
}
  
  
  



