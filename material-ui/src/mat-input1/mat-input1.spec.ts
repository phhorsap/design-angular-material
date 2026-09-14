import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInput1 } from './mat-input1';

describe('MatInput1', () => {
  let component: MatInput1;
  let fixture: ComponentFixture<MatInput1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInput1],
    }).compileComponents();

    fixture = TestBed.createComponent(MatInput1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
