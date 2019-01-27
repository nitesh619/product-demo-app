import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { productService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string = 'cart';
    products: IProduct[] = [];
    filteredProducts: IProduct[];
   errorMessage: any;

    constructor(private productService: productService) {
      this.listFilter = 'cart';
      this.filteredProducts = this.products;
    }

    get listFilter(): string {
      return this._listFilter
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1)
    }

    set listFilter(filterBy: string) {
      this._listFilter = filterBy;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onStarNotify(message: string): void {
      alert("Message: " +message);
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe(
        products => {
          this.products = products; 
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );
      
    }
}