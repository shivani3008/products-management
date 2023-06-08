import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-chips-cell-renderer',
  templateUrl: './chips-cell-renderer.component.html',
  styleUrls: ['./chips-cell-renderer.component.scss'],
})
export class ChipsCellRendererComponent implements ICellRendererAngularComp {
  public cellValue: string[] = [];

  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value.split(',').map((item: string) => item.trim());
  }

  refresh(): boolean {
    return false;
  }
}
