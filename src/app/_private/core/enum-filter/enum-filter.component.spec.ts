import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumFilterComponent } from './enum-filter.component';

describe('EnumFilterComponent', () => {
  let component: EnumFilterComponent;
  let fixture: ComponentFixture<EnumFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnumFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
