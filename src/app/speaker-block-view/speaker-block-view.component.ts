import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BlockStatus, MessengerService } from '../messenger.service';
import { TranscriptSpeakerBlock } from '../transcript.service';

@Component({
  selector: 'app-speaker-block-view',
  templateUrl: './speaker-block-view.component.html',
  styleUrls: ['./speaker-block-view.component.scss']
})
export class SpeakerBlockViewComponent implements OnInit {
  private isFocused: boolean = false;
  private isSelected: boolean = false;

  get IsFocused(): boolean { return this.isFocused; }
  SetFocused(st: boolean) { this.isFocused = st; this.messengerSvc.SetBlockState(this.block.BlockId, {Focused: st}) }
  get IsSelected(): boolean { return this.isSelected; }
  SetSelected(st: boolean) { this.isSelected = st; }

  @Input() block: TranscriptSpeakerBlock;
  @HostListener('mouseenter') mouseover(event: Event) {
    this.SetFocused(true);
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.SetFocused(false);
  }
  @HostListener('click') click(event: Event) {
    this.SetSelected(!this.IsSelected);
  }
  
  constructor(private messengerSvc: MessengerService) { }

  ngOnInit(): void {  
    this.messengerSvc.SetBlockState(this.block.BlockId, new BlockStatus(this.block.BlockId, false, false, false))
  }

  get TranscriptText(): string {
    return this.block.Items.map(item => item.Content).join(' ');
  }

  get IsExpanded(): boolean {
    return this.IsSelected || this.IsFocused;
  }
}
