import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscProductComponent } from './disc-product.component';

describe('DiscProductComponent', () => {
  let component: DiscProductComponent;
  let fixture: ComponentFixture<DiscProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
