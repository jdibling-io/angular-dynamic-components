import { Component, Input, OnInit } from '@angular/core';
import { Transcript } from '../transcript.service';

@Component({
  selector: 'app-transcript-view',
  templateUrl: './transcript-view.component.html',
  styleUrls: ['./transcript-view.component.scss']
})
export class TranscriptViewComponent implements OnInit {
  @Input() transcript: Transcript;
  constructor() { }

  ngOnInit(): void {
  }

}
