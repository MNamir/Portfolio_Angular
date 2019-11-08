import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatechildsecondComponent } from './navigatechildsecond.component';

describe('NavigatechildsecondComponent', () => {
  let component: NavigatechildsecondComponent;
  let fixture: ComponentFixture<NavigatechildsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatechildsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatechildsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
