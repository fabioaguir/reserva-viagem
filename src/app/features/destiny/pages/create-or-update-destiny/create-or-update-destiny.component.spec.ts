import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateDestinyComponent } from './create-or-update-destiny.component';

describe('CreateOrUpdateDestinyComponent', () => {
  let component: CreateOrUpdateDestinyComponent;
  let fixture: ComponentFixture<CreateOrUpdateDestinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrUpdateDestinyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateDestinyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
