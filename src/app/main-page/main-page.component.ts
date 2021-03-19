import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public rate: number = 0;
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  public addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.rate += newItem.amount;
  }

  public deleteItem(item: BudgetItem): void {
    let index = this.budgetItems.indexOf(item);
    this.rate -= item.amount;
    this.budgetItems.splice(index, 1);
  }

  public updateBudgetList(items: any): any {
    this.rate = 0;
    this.budgetItems.forEach(item => {
      this.rate += item.amount;
    })
  }

}
