import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBlockViewComponent } from './speaker-block-view.component';

describe('SpeakerBlockViewComponent', () => {
  let component: SpeakerBlockViewComponent;
  let fixture: ComponentFixture<SpeakerBlockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerBlockViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBlockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
