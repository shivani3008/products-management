import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = false;
  isMobile: boolean = false;
  private subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.subscription = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.opened = !this.isMobile;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
