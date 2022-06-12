import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodparentsComponent } from './godparents.component';

describe('GodparentsComponent', () => {
  let component: GodparentsComponent;
  let fixture: ComponentFixture<GodparentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodparentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
