import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductService } from '../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.productService.products$;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  AddProduct(){}
  onEdit(product: IProduct){

  }
  onDelete(product: IProduct){
    this.productService.onDelete(product);
  }
  // trackById(index: any, item: any){
  //   return(item.index)
  // }

}
