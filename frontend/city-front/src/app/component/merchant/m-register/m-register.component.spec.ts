import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegisterComponent } from './m-register.component';

describe('MRegisterComponent', () => {
  let component: MRegisterComponent;
  let fixture: ComponentFixture<MRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
