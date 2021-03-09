import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';
import { Transcript } from '../transcript.service';

@Component({
  selector: 'app-transcript-view',
  templateUrl: './transcript-view.component.html',
  styleUrls: ['./transcript-view.component.scss']
})
export class TranscriptViewComponent implements OnInit {
  @Input() transcript: Transcript;
  constructor(private messegerSvc: MessengerService) { }

  ngOnInit(): void {  }
  OnSelectAll() {
    this.messegerSvc.ToggleSelection(true);
  }
  OnSelectNone() {
    this.messegerSvc.ToggleSelection(false);
  }

}
