import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() xButtonClick :EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public onXButtonClick():any{
    this.xButtonClick.emit();
  }

  onCardClick(item:BudgetItem){
    this.cardClick.emit(item)
  }

}
