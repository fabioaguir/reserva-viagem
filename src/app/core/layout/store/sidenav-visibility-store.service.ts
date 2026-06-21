import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavVisibilityStoreService {
  private readonly state = signal(false);

  isVisible = computed(() => this.state());

  toggle() {
    this.state.update((value) => !value)
  }

  clean() {
    this.state.set(false);
  }
}
