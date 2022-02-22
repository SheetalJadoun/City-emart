import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyMerchantComponent } from './add-money-merchant.component';

describe('AddMoneyMerchantComponent', () => {
  let component: AddMoneyMerchantComponent;
  let fixture: ComponentFixture<AddMoneyMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneyMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
