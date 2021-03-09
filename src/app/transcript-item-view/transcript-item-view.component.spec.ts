import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptItemViewComponent } from './transcript-item-view.component';

describe('TranscriptItemViewComponent', () => {
  let component: TranscriptItemViewComponent;
  let fixture: ComponentFixture<TranscriptItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
