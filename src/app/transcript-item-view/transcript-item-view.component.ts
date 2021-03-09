import { Component, Input, OnInit } from '@angular/core';
import { TranscriptItem } from '../transcript.service';

@Component({
  selector: 'app-transcript-item-view',
  templateUrl: './transcript-item-view.component.html',
  styleUrls: ['./transcript-item-view.component.scss']
})
export class TranscriptItemViewComponent implements OnInit {
  @Input() item: TranscriptItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
