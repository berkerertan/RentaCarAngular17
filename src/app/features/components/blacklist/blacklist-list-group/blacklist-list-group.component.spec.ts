import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistListGroupComponent } from './blacklist-list-group.component';

describe('BlacklistListGroupComponent', () => {
  let component: BlacklistListGroupComponent;
  let fixture: ComponentFixture<BlacklistListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlacklistListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlacklistListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
