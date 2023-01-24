import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'in-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {
  @Input() product;
  @Output() cancel= new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onCancel(){
    this.cancel.emit();
  }
  onDelete(){
    this.confirm.emit();
  }

}
