import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../service/product.service';
import { Product } from '../model/products'; 
@Component({
  templateUrl: './product.component.html',
})
 
export class ProductComponent
{
 
   products:Product[];
   
   constructor(private productService:ProductService){
   }
 
   ngOnInit() {
     this.products=this.productService.getProducts();
   }
  
}
 