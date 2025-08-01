import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSelecters } from './component-selecters';

describe('ComponentSelecters', () => {
  let component: ComponentSelecters;
  let fixture: ComponentFixture<ComponentSelecters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSelecters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSelecters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
