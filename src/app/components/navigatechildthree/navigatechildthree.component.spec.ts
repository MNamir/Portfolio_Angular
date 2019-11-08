import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatechildthreeComponent } from './navigatechildthree.component';

describe('NavigatechildthreeComponent', () => {
  let component: NavigatechildthreeComponent;
  let fixture: ComponentFixture<NavigatechildthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatechildthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatechildthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
