import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SpeakerBlockViewComponent } from './speaker-block-view/speaker-block-view.component';
import { TranscriptViewComponent } from './transcript-view/transcript-view.component';
import { TranscriptItemViewComponent } from './transcript-item-view/transcript-item-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TranscriptViewComponent,
    SpeakerBlockViewComponent,
    TranscriptItemViewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
