import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryCategoryComponent } from './pantry-category.component';

describe('PantryCategoryComponent', () => {
  let component: PantryCategoryComponent;
  let fixture: ComponentFixture<PantryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
