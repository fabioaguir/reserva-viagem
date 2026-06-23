import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavItemsComponent } from './sidenav-items.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('SidenavItemsComponent', () => {
  let component: SidenavItemsComponent;
  let fixture: ComponentFixture<SidenavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavItemsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {},
              queryParams: {}
            }
          }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavItemsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
