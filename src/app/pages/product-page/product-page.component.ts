import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../../models/product';
import {ProductsService} from '../../services/products.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular app'
  // products: IProduct[] = []
  isLoading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true

    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.isLoading = false)
    // )

    this.productsService.getAll().subscribe((products) => {
      this.isLoading = false
    })
  }
}
