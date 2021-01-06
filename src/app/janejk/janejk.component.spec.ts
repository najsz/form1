import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanejkComponent } from './janejk.component';

describe('JanejkComponent', () => {
  let component: JanejkComponent;
  let fixture: ComponentFixture<JanejkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanejkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanejkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
