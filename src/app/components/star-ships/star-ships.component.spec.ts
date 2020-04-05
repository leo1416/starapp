import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShipsComponent } from './star-ships.component';

describe('StarShipsComponent', () => {
  let component: StarShipsComponent;
  let fixture: ComponentFixture<StarShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
