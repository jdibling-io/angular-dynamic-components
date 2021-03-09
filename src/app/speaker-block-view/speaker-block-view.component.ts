import { Component, Input, OnInit } from '@angular/core';
import { TranscriptSpeakerBlock } from '../transcript.service';

@Component({
  selector: 'app-speaker-block-view',
  templateUrl: './speaker-block-view.component.html',
  styleUrls: ['./speaker-block-view.component.scss']
})
export class SpeakerBlockViewComponent implements OnInit {
  @Input() block: TranscriptSpeakerBlock;
  constructor() { }

  ngOnInit(): void {
  }

}
