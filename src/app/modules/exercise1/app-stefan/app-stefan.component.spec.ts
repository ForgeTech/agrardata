import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStefanComponent } from './app-stefan.component';

describe('AppStefanComponent', () => {
  let component: AppStefanComponent;
  let fixture: ComponentFixture<AppStefanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStefanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStefanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
