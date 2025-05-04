import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StepperTabsComponent } from './stepper-tabs/stepper-tabs.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, StepperTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeStep = 0;

  onStepChange(stepIndex: number): void {
    this.activeStep = stepIndex;
  }

  stepName = [
    'Company',
    'Contact Details Kurla West and Pen Card',
    'Verify Using OTP and Pen Card',
    'Adhar Card No',
  ];
}
