import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwitchesSectionComponent } from './user-twitches-section.component';

describe('UserTwitchesSectionComponent', () => {
  let component: UserTwitchesSectionComponent;
  let fixture: ComponentFixture<UserTwitchesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTwitchesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTwitchesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
