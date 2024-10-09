import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeblogComponent } from './veblog.component';

describe('VeblogComponent', () => {
  let component: VeblogComponent;
  let fixture: ComponentFixture<VeblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
