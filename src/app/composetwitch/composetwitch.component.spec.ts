import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposetwitchComponent } from './composetwitch.component';

describe('ComposetwitchComponent', () => {
  let component: ComposetwitchComponent;
  let fixture: ComponentFixture<ComposetwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposetwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposetwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
