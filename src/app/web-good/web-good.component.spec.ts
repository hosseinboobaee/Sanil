import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGoodComponent } from './web-good.component';

describe('WebGoodComponent', () => {
  let component: WebGoodComponent;
  let fixture: ComponentFixture<WebGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebGoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
