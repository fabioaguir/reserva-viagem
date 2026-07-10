import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyListComponent } from './destiny-list.component';

describe('DestinyListComponent', () => {
  let component: DestinyListComponent;
  let fixture: ComponentFixture<DestinyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinyListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DestinyListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
