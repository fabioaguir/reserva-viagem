import { Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SidenavVisibilityStoreService } from '../../../../store/sidenav-visibility-store.service';

@Component({
  selector: 'app-sidenav-items',
  imports: [MatListModule, RouterModule],
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss',
})
export class SidenavItemsComponent {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStoreService);

  links = signal([
    {
      label: "Home", url: "/"
    },
    {
      label: "Destinos", url: "/destinos"
    },
    {
      label: "Excursões", url: "/excursoes"
    },
  ])

  closeSidenav() {
    this.sidenavVisibilityStore.clean();
  }
}
