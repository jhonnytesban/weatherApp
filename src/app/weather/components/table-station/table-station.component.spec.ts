import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStationComponent } from './table-station.component';

describe('TableStationComponent', () => {
  let component: TableStationComponent;
  let fixture: ComponentFixture<TableStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
