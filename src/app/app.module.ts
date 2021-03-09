import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SpeakerBlockViewComponent } from './speaker-block-view/speaker-block-view.component';
import { TranscriptViewComponent } from './transcript-view/transcript-view.component';
import { SpeakerBlockContentViewComponent } from './speaker-block-content-view/speaker-block-content-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TranscriptViewComponent,
    SpeakerBlockViewComponent,
    SpeakerBlockContentViewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
