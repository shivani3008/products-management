import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { ContentHeaderComponent } from './content-header.component';

describe('ContentHeaderComponent', () => {
  let component: ContentHeaderComponent;
  let fixture: ComponentFixture<ContentHeaderComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatIconModule, MatButtonModule],
      providers: [Location],
    });

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(ContentHeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show header without back button', () => {
    const headerElement = fixture.debugElement.query(
      By.css('[data-testid="content-header"]')
    );

    const text = headerElement
      ?.query(By.css('h2'))
      ?.nativeElement.textContent.trim();
    expect(text).toEqual('Test Title');

    const backButton = headerElement?.query(By.css('button'));
    expect(backButton).toBeFalsy();
  });

  it('should show header with back button', () => {
    component.backButton = true;
    fixture.detectChanges();

    const headerElement = fixture.debugElement.query(
      By.css('[data-testid="content-header"]')
    );

    const text = headerElement
      ?.query(By.css('h2'))
      ?.nativeElement.textContent.trim();
    expect(text).toEqual('Test Title');

    const backButton = headerElement?.query(By.css('button'));
    expect(backButton).toBeTruthy();
  });

  it('should navigate to the previous page', () => {
    spyOn(location, 'back').and.callFake(() => {});
    component.backButton = true;
    fixture.detectChanges();

    const backButton = fixture.debugElement
      .query(By.css('[data-testid="content-header"]'))
      ?.query(By.css('button'));
    backButton.nativeElement.click();

    expect(location.back).toHaveBeenCalled();
  });
});
