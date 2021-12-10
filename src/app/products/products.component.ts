import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any = [];
  selectedPriceType: string = "";
  displayType: string = "grid";

  constructor(private productsService:ProductsService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(
        (data) => {
          this.products = data.body;
        },
        // error => this.error = error // error path
      );
  }

  changePriceType(selectedValue: string) {
    switch (selectedValue) {
      case "low":
        {
          this.products = this.products.sort((a:any, b:any) => a.price - b.price);
          break;
        }
      case "high":
        {
          this.products = this.products.sort((a:any, b:any) => b.price - a.price);
          break;
        }
      case "alphabetically": 
        {
          this.products = this.products.sort(function (a:any, b:any) {
            if (a.title < b.title) {
              return -1;
            }
            else if (a.title > b.title) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
      default:
        {
          this.products = this.products.sort((a:any, b:any) => a.id - b.id);
          break;
        }
    }
  }
}
