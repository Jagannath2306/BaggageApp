import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevisComponent } from './levis.component';

describe('LevisComponent', () => {
  let component: LevisComponent;
  let fixture: ComponentFixture<LevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
