import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlimitedComponent } from './unlimited.component';

describe('UnlimitedComponent', () => {
  let component: UnlimitedComponent;
  let fixture: ComponentFixture<UnlimitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlimitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
