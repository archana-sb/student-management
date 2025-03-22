import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'student-management';
  isLargeScreen: boolean = window.innerWidth > 768;
  sideNavMode: 'side' | 'over' = this.isLargeScreen ? 'side' : 'over';
  isSidenavOpened: boolean = this.isLargeScreen;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isLargeScreen = window.innerWidth > 768;
    this.sideNavMode = this.isLargeScreen ? 'side' : 'over';
    this.isSidenavOpened = this.isLargeScreen;
  }
}
