import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInput1 } from '../mat-input1/mat-input1';

@Component({
  imports: [RouterOutlet,MatInput1],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('material-ui');
}
