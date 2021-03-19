import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  /* public isNewItem: boolean = false; */
  @Input() isNewItem: boolean = true;
  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
    /* if (this.item) {
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
    } */
  }

  public onSubmit(form: NgForm): any {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
