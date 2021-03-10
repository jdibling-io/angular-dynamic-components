import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockStatus, MessengerService } from './messenger.service';
import { Transcript, TranscriptService } from './transcript.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic';

  constructor(private transcriptSvc: TranscriptService, private messengerSvc: MessengerService) {}
  Transcript$: Observable<Transcript> = this.transcriptSvc.Transcript$;
  Blocks$: Observable<BlockStatus[]> = this.messengerSvc.Blocks$;
}
