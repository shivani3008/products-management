import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class ContentHeaderComponent {
  @Input() title: string = '';
  @Input() backButton: boolean = false;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
