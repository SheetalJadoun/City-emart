import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShopViewComponent } from './admin-shop-view.component';

describe('AdminShopViewComponent', () => {
  let component: AdminShopViewComponent;
  let fixture: ComponentFixture<AdminShopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShopViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
