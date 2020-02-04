import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrarComponent } from './agrar.component';

describe('AgrarComponent', () => {
  let component: AgrarComponent;
  let fixture: ComponentFixture<AgrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
