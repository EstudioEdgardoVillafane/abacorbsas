import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HagDistComponent } from './hag-dist.component';

describe('HagDistComponent', () => {
  let component: HagDistComponent;
  let fixture: ComponentFixture<HagDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HagDistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HagDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
