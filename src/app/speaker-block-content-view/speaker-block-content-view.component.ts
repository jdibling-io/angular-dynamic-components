import { Component, Input, OnInit } from '@angular/core';
import { TranscriptItem } from '../transcript.service';

@Component({
  selector: 'app-speaker-block-content-view',
  templateUrl: './speaker-block-content-view.component.html',
  styleUrls: ['./speaker-block-content-view.component.scss']
})
export class SpeakerBlockContentViewComponent implements OnInit {
  @Input() items: TranscriptItem[];
  constructor() { }

  ngOnInit(): void { }

  get contentText(): string {
    return this.items.map(item => item.Content).join(" ");
  }

}
