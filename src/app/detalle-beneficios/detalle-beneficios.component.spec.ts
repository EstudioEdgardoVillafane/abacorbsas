import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBeneficiosComponent } from './detalle-beneficios.component';

describe('DetalleBeneficiosComponent', () => {
  let component: DetalleBeneficiosComponent;
  let fixture: ComponentFixture<DetalleBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
