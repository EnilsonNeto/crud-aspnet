import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourcesHumansComponent } from './edit-resources-humans.component';

describe('EditResourcesHumansComponent', () => {
  let component: EditResourcesHumansComponent;
  let fixture: ComponentFixture<EditResourcesHumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResourcesHumansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourcesHumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
