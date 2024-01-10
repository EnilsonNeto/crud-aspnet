import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResourcesHumansComponent } from './info-resources-humans.component';

describe('InfoResourcesHumansComponent', () => {
  let component: InfoResourcesHumansComponent;
  let fixture: ComponentFixture<InfoResourcesHumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResourcesHumansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoResourcesHumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
