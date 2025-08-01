import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selecter1 } from './selecter1';

describe('Selecter1', () => {
  let component: Selecter1;
  let fixture: ComponentFixture<Selecter1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecter1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selecter1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
