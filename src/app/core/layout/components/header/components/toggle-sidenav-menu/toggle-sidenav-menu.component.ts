import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavVisibilityStoreService } from '../../../../store/sidenav-visibility-store.service';
import { MobileLayoutService } from '../../../../service/mobile-layout.service';

@Component({
  selector: 'app-toggle-sidenav-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toggle-sidenav-menu.component.html',
  styleUrl: './toggle-sidenav-menu.component.scss',
})
export class ToggleSidenavMenuComponent {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStoreService);
  private readonly mobileLayoutService = inject(MobileLayoutService);

  isMobile = this.mobileLayoutService.isMobile();

  toggleSidenav() {
    this.sidenavVisibilityStore.toggle();
  }

}
