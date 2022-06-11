import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRoomComponent } from './location-room.component';

describe('LocationRoomComponent', () => {
  let component: LocationRoomComponent;
  let fixture: ComponentFixture<LocationRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
