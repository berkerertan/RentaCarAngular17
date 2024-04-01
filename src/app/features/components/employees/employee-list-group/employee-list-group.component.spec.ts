import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListGroupComponent } from './employee-list-group.component';

describe('EmployeeListGroupComponent', () => {
  let component: EmployeeListGroupComponent;
  let fixture: ComponentFixture<EmployeeListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
