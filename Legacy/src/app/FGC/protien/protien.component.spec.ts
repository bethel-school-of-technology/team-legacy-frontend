import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtienComponent } from './protien.component';

describe('ProtienComponent', () => {
  let component: ProtienComponent;
  let fixture: ComponentFixture<ProtienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
