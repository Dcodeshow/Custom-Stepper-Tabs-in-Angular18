import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stepper-tabs',
  imports: [CommonModule],
  templateUrl: './stepper-tabs.component.html',
  styleUrl: './stepper-tabs.component.scss',
})
export class StepperTabsComponent {
  @Input() steps: { title: string; id: string; width: string }[] = [];

  @Input() activeStepIndex: number = 0;

  @Output() stepChange = new EventEmitter<number>();

  setActiveStep(index: number): void {
    if (index !== this.activeStepIndex) {
      this.activeStepIndex = index;
      this.stepChange.emit(index);
    }
  }

  isStepValid(index: number): boolean {
    // You can implement validation logic here
    // For now, we'll assume all previous steps are valid
    return index <= this.activeStepIndex;
  }
}
