import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatSnackBarModule,
      ],
      declarations: [AppComponent],
      providers: [BreakpointObserver],
    }).compileComponents();

    breakpointObserver = TestBed.inject(BreakpointObserver);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should show a menu button in the header when in mobile mode', () => {
    spyOn(breakpointObserver, 'observe').and.returnValue(
      of({ matches: true, breakpoints: {} })
    );
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.isMobile).toBe(true);
    const menuButton = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    );
    expect(menuButton).toBeTruthy();
  });

  it('should not show menu button in the header when in desktop mode', () => {
    spyOn(breakpointObserver, 'observe').and.returnValue(
      of({ matches: false, breakpoints: {} })
    );
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.isMobile).toBe(false);
    const menuButton = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    );
    expect(menuButton).toBeFalsy();
  });
});
