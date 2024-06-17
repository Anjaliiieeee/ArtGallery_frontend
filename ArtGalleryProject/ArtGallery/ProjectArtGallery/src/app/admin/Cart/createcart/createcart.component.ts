import { Component } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { Cart } from '../../../model/cart';

@Component({
  selector: 'app-createcart',
  templateUrl: './createcart.component.html',
  styleUrl: './createcart.component.css'
})
export class CreatecartComponent {

  constructor(public service:CartService){}
  submitted=false;

  cart=new Cart();

  onSubmit()
  {
    this.submitted=true;
    this.save();
  }
save()
{
  this.service.createcart(this.cart).subscribe();
}


}
