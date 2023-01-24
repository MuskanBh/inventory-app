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
  productOpen=false;
  selectedProduct: IProduct;
  productToBeDeleted;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  AddProduct(){
    this.productOpen = true;
    this.selectedProduct = undefined;
  }
  onEdit(product: IProduct){
    this.productOpen = true;
    this.selectedProduct = product;
  }
  handleFinish(event) {
    if (event && event.product) {
    if (this.selectedProduct) {
    // Edit Flow
    this.productService.editProduct(this.selectedProduct.id,
    event.product);
    } else {
    // Save New
    this.productService.addProduct(event.product);
    }
    }
    this.productOpen = false;
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
