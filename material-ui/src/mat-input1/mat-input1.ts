import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  imports: [MatInputModule, MatFormFieldModule

  ],
  selector: 'app-mat-input1',
  styleUrl: './mat-input1.scss',
  templateUrl: './mat-input1.html',
})
export class MatInput1 {}
