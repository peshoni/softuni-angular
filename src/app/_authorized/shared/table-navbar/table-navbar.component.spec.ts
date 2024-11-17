import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNavbarComponent } from './table-navbar.component';

describe('TableNavbarComponent', () => {
  let component: TableNavbarComponent;
  let fixture: ComponentFixture<TableNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
