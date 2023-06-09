import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss'],
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  src: string = '';

  agInit(params: ICellRendererParams): void {
    this.src = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
