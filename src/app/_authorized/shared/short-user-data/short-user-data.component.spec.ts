import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUserDataComponent } from './short-user-data.component';

describe('ShortUserDataComponent', () => {
  let component: ShortUserDataComponent;
  let fixture: ComponentFixture<ShortUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortUserDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
