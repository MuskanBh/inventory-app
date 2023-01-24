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
  delete = false;
  productToBeDeleted;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  AddProduct(){}
  onEdit(product: IProduct){

  }
  onCancel(){
    this.delete=false;
  }
  onConfirm(){
    this.onCancel();
    this.productService.onDelete(this.productToBeDeleted);
  }
  onDelete(product: IProduct){
    this.delete=true;
    this.productToBeDeleted= product;

    // this.productService.onDelete(product);
  }
  // trackById(index: any, item: any){
  //   return(item.index)
  // }

}
