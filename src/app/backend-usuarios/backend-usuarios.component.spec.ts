import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUsuariosComponent } from './backend-usuarios.component';

describe('BackendUsuariosComponent', () => {
  let component: BackendUsuariosComponent;
  let fixture: ComponentFixture<BackendUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
