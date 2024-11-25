import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesListSectionComponent } from './features-list-section.component';

describe('FeaturesListSectionComponent', () => {
  let component: FeaturesListSectionComponent;
  let fixture: ComponentFixture<FeaturesListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesListSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
