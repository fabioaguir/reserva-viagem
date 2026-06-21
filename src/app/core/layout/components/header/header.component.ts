import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToggleSidenavMenuComponent } from './components/toggle-sidenav-menu/toggle-sidenav-menu.component';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, ToggleSidenavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent { }
