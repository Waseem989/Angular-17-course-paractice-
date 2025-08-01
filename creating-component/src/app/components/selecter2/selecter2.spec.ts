import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selecter2 } from './selecter2';

describe('Selecter2', () => {
  let component: Selecter2;
  let fixture: ComponentFixture<Selecter2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecter2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selecter2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
