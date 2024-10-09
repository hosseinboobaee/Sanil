import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoosterComponent } from './pooster.component';

describe('PoosterComponent', () => {
  let component: PoosterComponent;
  let fixture: ComponentFixture<PoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
