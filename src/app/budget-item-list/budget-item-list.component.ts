import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/model/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[]=[];
  @Output() delete:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update:EventEmitter<any> = new EventEmitter<any>();
  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  public onDelete(item:BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item:BudgetItem):any{
    const dialogRef = this.dialog.open(EditItemModalComponent,{
      width:'580px',
      height:'400px',
      data:item
    });

    dialogRef.afterClosed().subscribe(result=>{
      
      if(result){
        let response :any[] = [];
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
        response.push(result);
        response.push(this.budgetItems.indexOf(item));
        this.update.emit(response)
      }

    })
  }

}
