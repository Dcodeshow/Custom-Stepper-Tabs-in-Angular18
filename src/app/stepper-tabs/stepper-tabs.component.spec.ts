import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTabsComponent } from './stepper-tabs.component';

describe('StepperTabsComponent', () => {
  let component: StepperTabsComponent;
  let fixture: ComponentFixture<StepperTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
