import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantListGroupComponent } from './applicant-list-group.component';

describe('ApplicantListGroupComponent', () => {
  let component: ApplicantListGroupComponent;
  let fixture: ComponentFixture<ApplicantListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicantListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
