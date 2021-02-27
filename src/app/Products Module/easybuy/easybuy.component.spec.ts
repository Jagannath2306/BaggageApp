import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasybuyComponent } from './easybuy.component';

describe('EasybuyComponent', () => {
  let component: EasybuyComponent;
  let fixture: ComponentFixture<EasybuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasybuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasybuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
