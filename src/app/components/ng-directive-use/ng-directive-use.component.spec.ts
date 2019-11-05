import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectiveUseComponent } from './ng-directive-use.component';

describe('NgDirectiveUseComponent', () => {
  let component: NgDirectiveUseComponent;
  let fixture: ComponentFixture<NgDirectiveUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDirectiveUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDirectiveUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
