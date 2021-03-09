import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class TranscriptItem {
  constructor(public Content: string, public Start: number, public End: number) {}
}

export class TranscriptSpeakerBlock {
  constructor(public Speaker: number) { this.Items = [];}
  Items: TranscriptItem[];
}

export class Transcript {
  SpeakerBlocks: TranscriptSpeakerBlock[];
  constructor() { this.SpeakerBlocks = [];}
}

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {
  public Transcript$: Observable<Transcript> = of(this.transcript);
  constructor() { }

  private get transcript(): Transcript {
    // let's make a mock transcript with 5 speaker blocks
    // and a bunch of text...
    const loremText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    const loremParts: string[] = loremText.split(' ');

    let retval: Transcript = new Transcript();
    let curSpeaker = 1;
    let curStart = 0; // we will simply increment curStart by 500 for each word
    for (let idx = 0; idx < 5; idx++) {
      // here is a new speaker block
      let speakerBlock = new TranscriptSpeakerBlock(curSpeaker);
      // fill it in with words
      loremParts.forEach(part => {
        speakerBlock.Items.push(new TranscriptItem(part, curStart, curStart+500));
        curStart += 500;
      })
      // flip the speaker ID between 1 and 2 for the next speaker block
      curSpeaker = (curSpeaker==1) ? 2 : 1;
      retval.SpeakerBlocks.push(speakerBlock);
    }

    console.log('Returning: ', retval);

    return retval;
  }
}
