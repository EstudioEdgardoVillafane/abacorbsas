import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCentComponent } from './backend-cent.component';

describe('BackendCentComponent', () => {
  let component: BackendCentComponent;
  let fixture: ComponentFixture<BackendCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
