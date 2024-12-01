import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketLogDetailsComponent } from './ticket-log-details.component';

describe('TicketLogDetailsComponent', () => {
  let component: TicketLogDetailsComponent;
  let fixture: ComponentFixture<TicketLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketLogDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
