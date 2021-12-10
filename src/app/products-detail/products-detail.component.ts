import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  product:any = {};

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    // Find the product that correspond with the id provided in route.
    this.productsService.getProduct(productIdFromRoute).subscribe(product => {
      this.product = product.body
      console.log(this.product['title']);
    });
  }
}
