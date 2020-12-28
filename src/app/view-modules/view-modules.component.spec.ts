import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModulesComponent } from './view-modules.component';

describe('ViewModulesComponent', () => {
  let component: ViewModulesComponent;
  let fixture: ComponentFixture<ViewModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
