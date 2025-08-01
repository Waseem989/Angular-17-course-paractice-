import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selecter3 } from './selecter3';

describe('Selecter3', () => {
  let component: Selecter3;
  let fixture: ComponentFixture<Selecter3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecter3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selecter3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
