import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorianComponent } from './florian.component';

describe('FlorianComponent', () => {
  let component: FlorianComponent;
  let fixture: ComponentFixture<FlorianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlorianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlorianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
