import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepsComponent } from "./steps/steps.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2-progress-steps';
}
