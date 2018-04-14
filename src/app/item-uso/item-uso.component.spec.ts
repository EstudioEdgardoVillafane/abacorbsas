import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUsoComponent } from './item-uso.component';

describe('ItemUsoComponent', () => {
  let component: ItemUsoComponent;
  let fixture: ComponentFixture<ItemUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
