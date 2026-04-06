import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtask } from './newtask';

describe('Newtask', () => {
  let component: Newtask;
  let fixture: ComponentFixture<Newtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newtask],
    }).compileComponents();

    fixture = TestBed.createComponent(Newtask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
