import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsCellRendererComponent } from './chips-cell-renderer.component';

@NgModule({
  declarations: [ChipsCellRendererComponent],
  imports: [CommonModule, MatChipsModule],
})
export class ChipsCellRendererModule {}
