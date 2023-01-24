import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id:number;
  name: string;
  active: boolean;
  description: string;
  expirationDate:string;
  type:string;
  features?:string[];
}
function generateId() {
  return Math.floor(Math.random() * 1000);
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [{
    id:generateId(),
    name: "iPhone X",
    expirationDate: '01/12/2026',
    active: false,
    description: 'Like Brand New',
    type: 'mobile'

  },
{
  id:generateId(),
    name: "iPad Air",
    expirationDate: '01/08/2026',
    active: true,
    description: 'Like Brand New',
    type: 'mobile'
},
{
  id:generateId(),
    name: "iPhone XS",
    expirationDate: '01/12/2026',
    active: true,
    description: 'Like Brand New',
    type: 'mobile'
}];
  products$= new BehaviorSubject<IProduct[]>(this.products);
  constructor() { }
  onDelete(product: IProduct){
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0,index),
      ...this.products.slice(index+1)
    ]
    this.products$.next(this.products)
  }
  editProduct(id, product){
    const index = this.products.findIndex(p=> p.id ===id);
    this.products=[
      ...this.products.slice(0,index),
      {
        id,
        ...product
      },
      ...this.products.slice(index+1)
    ]
    this.products$.next(this.products)
  }
  addProduct(product){
    this.products=[{
      id: generateId(),
      ...product
    }]
    this.products$.next(this.products)
  }
}
