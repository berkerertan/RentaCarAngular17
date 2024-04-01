import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorListGroupComponent } from './instructor-list-group.component';

describe('InstructorListGroupComponent', () => {
  let component: InstructorListGroupComponent;
  let fixture: ComponentFixture<InstructorListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
