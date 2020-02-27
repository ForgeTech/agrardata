import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJosefComponent } from './app-josef.component';

describe('AppJosefComponent', () => {
  let component: AppJosefComponent;
  let fixture: ComponentFixture<AppJosefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppJosefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJosefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
