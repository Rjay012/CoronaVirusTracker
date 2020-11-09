import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularSummaryComponent } from './tabular-summary.component';

describe('TabularSummaryComponent', () => {
  let component: TabularSummaryComponent;
  let fixture: ComponentFixture<TabularSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
