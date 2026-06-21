import { Component, computed, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, ɵEmptyOutletComponent } from "@angular/router";
import { SidenavItemsComponent } from './components/sidenav-items/sidenav-items.component';
import { SidenavVisibilityStoreService } from '../../store/sidenav-visibility-store.service';
import { MobileLayoutService } from '../../service/mobile-layout.service';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, RouterModule, SidenavItemsComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStoreService);
  private readonly mobileLayout = inject(MobileLayoutService);

  isMobile = this.mobileLayout.isMobile();

  sideNavMode = computed(() => this.isMobile() ? 'over' : 'side');

  isSidenavOpened = computed(() => {
    if (!this.isMobile()) {
      return true
    }

    return this.sidenavVisibilityStore.isVisible();
  })

}
