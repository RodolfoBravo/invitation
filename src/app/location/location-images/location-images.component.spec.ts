import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationImagesComponent } from './location-images.component';

describe('LocationImagesComponent', () => {
  let component: LocationImagesComponent;
  let fixture: ComponentFixture<LocationImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
