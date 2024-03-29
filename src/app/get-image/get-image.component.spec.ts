import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImageComponent } from './get-image.component';

describe('GetImageComponent', () => {
  let component: GetImageComponent;
  let fixture: ComponentFixture<GetImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
