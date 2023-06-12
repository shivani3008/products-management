import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipsModule } from '@angular/material/chips';
import { ChipsCellRendererComponent } from './chips-cell-renderer.component';

describe('ChipsCellRendererComponent', () => {
  let component: ChipsCellRendererComponent;
  let fixture: ComponentFixture<ChipsCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsCellRendererComponent],
      imports: [MatChipsModule],
    });
    fixture = TestBed.createComponent(ChipsCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
