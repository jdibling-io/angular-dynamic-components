import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TranscriptSpeakerBlock } from '../transcript.service';

@Component({
  selector: 'app-speaker-block-view',
  templateUrl: './speaker-block-view.component.html',
  styleUrls: ['./speaker-block-view.component.scss']
})
export class SpeakerBlockViewComponent implements OnInit {
  IsFocused: boolean = false;
  IsSelected: boolean = false;

  @Input() block: TranscriptSpeakerBlock;
  constructor() { }
  @HostListener('mouseenter') mouseover(event: Event) {
    console.log("mouseenter");
    this.IsFocused = true;
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    console.log("mouseleave");
    this.IsFocused = false;
  }
  @HostListener('click') click(event: Event) {
    this.IsSelected = !this.IsSelected;
  }

  ngOnInit(): void {  }

  get TranscriptText(): string {
    return this.block.Items.map(item => item.Content).join(' ');
  }

  get IsExpanded(): boolean {
    return this.IsSelected || this.IsFocused;
  }
}
