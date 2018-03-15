import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaneComponent } from './home-pane.component';

describe('HomePaneComponent', () => {
  let component: HomePaneComponent;
  let fixture: ComponentFixture<HomePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
