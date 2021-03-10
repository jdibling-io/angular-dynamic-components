import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
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

  mouseleave$ = fromEvent(this.element.nativeElement, 'mouseleave');
  mouseenter$ = fromEvent(this.element.nativeElement, 'mouseenter');
  
  // @HostListener('mouseenter') mouseover(event: Event) {
  //   this.SetFocused(true);
  // }
  // @HostListener('mouseleave') mouseleave(event: Event) {
  //   this.SetFocused(false);
  // }
  @HostListener('click') click(event: Event) {
    this.SetSelected(!this.IsSelected);
  }
  
  
  constructor(private messengerSvc: MessengerService, private readonly element: ElementRef) { }

  ngOnInit(): void {  
    this.messengerSvc.SetBlockState(this.block.BlockId, new BlockStatus(this.block.BlockId, false, false, false))
    this.mouseenter$.pipe(
      debounceTime(400), // 400 ms delay
      takeUntil(this.mouseleave$),
    ).subscribe((_) => this.SetFocused(true));
    this.mouseleave$.subscribe((_) => this.SetFocused(false));
  }

  get TranscriptText(): string {
    return this.block.Items.map(item => item.Content).join(' ');
  }

  get IsExpanded(): boolean {
    return this.IsSelected || this.IsFocused;
  }
}
