import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss'],
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  agInit(): void {}

  refresh(): boolean {
    return false;
  }
}
