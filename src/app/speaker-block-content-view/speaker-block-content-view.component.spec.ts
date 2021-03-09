import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBlockContentViewComponent } from './speaker-block-content-view.component';

describe('SpeakerBlockContentViewComponent', () => {
  let component: SpeakerBlockContentViewComponent;
  let fixture: ComponentFixture<SpeakerBlockContentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerBlockContentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBlockContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
