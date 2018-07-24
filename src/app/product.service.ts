import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productDetails = [
    {
      "category":"Television",
      "Name":"Tv"
  },
{
"category":"Mobile Phone",
"productId":1,
"imageUrl": "https://www.richersounds.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/4/0/400033-v2.jpg",
"productName": "Samsung 40 inch 4K",
"productPrice": 102999,
"description": "Samsung UE40MU6120 40 inch 4K Ultra HD Smart HDR LED TV TVPlus,Certified Ultra HD",
"features":"HDR, Smart view, Smart hub, Gaming, UHD upscaling",
"starRating": 4.2,
} 

  ];

    filterProduct(category) {

        return  this.productDetails.filter(
            (product)=>product.category.indexOf(category)!=-1); 
    }
}
