import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRoutComponent } from './products-rout.component';

describe('ProductsRoutComponent', () => {
  let component: ProductsRoutComponent;
  let fixture: ComponentFixture<ProductsRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsRoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
