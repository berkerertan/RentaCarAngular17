import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListGroupComponent } from './application-list-group.component';

describe('ApplicationListGroupComponent', () => {
  let component: ApplicationListGroupComponent;
  let fixture: ComponentFixture<ApplicationListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
