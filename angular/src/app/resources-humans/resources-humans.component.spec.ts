import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesHumansComponent } from './resources-humans.component';

describe('ResourcesHumansComponent', () => {
  let component: ResourcesHumansComponent;
  let fixture: ComponentFixture<ResourcesHumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesHumansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesHumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
