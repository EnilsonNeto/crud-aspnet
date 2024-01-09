import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourcesHumansComponent } from './create-resources-humans.component';

describe('CreateResourcesHumansComponent', () => {
  let component: CreateResourcesHumansComponent;
  let fixture: ComponentFixture<CreateResourcesHumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResourcesHumansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourcesHumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
