import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatechildfirstComponent } from './navigatechildfirst.component';

describe('NavigatechildfirstComponent', () => {
  let component: NavigatechildfirstComponent;
  let fixture: ComponentFixture<NavigatechildfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatechildfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatechildfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
