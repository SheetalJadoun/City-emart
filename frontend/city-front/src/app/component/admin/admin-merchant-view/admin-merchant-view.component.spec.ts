import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchantViewComponent } from './admin-merchant-view.component';

describe('AdminMerchantViewComponent', () => {
  let component: AdminMerchantViewComponent;
  let fixture: ComponentFixture<AdminMerchantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMerchantViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
