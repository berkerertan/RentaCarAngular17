import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampStateListGroupComponent } from './bootcamp-state-list-group.component';

describe('BootcampStateListGroupComponent', () => {
  let component: BootcampStateListGroupComponent;
  let fixture: ComponentFixture<BootcampStateListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootcampStateListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootcampStateListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
