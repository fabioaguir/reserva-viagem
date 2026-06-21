import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSidenavMenuComponent } from './toggle-sidenav-menu.component';

describe('ToggleSidenavMenuComponent', () => {
  let component: ToggleSidenavMenuComponent;
  let fixture: ComponentFixture<ToggleSidenavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSidenavMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleSidenavMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
