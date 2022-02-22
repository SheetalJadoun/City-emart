import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyCustomerComponent } from './add-money-customer.component';

describe('AddMoneyCustomerComponent', () => {
  let component: AddMoneyCustomerComponent;
  let fixture: ComponentFixture<AddMoneyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneyCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
