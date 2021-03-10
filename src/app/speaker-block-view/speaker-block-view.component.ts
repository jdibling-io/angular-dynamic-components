import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, merge, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { BlockStatus, MessengerService } from '../messenger.service';
import { TranscriptSpeakerBlock } from '../transcript.service';

@UntilDestroy()
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

  @HostListener('click') click(event: Event) {
    this.SetSelected(!this.IsSelected);
  }
    
  constructor(private messengerSvc: MessengerService, private readonly element: ElementRef) { }

  delay = 500;
  ngOnInit(): void {  
    
    this.messengerSvc.SetBlockState(this.block.BlockId, new BlockStatus(this.block.BlockId, false, false, false))

    const enter$ = fromEvent(this.element.nativeElement, 'mouseenter').pipe(map(_ => true));
    const leave$ = fromEvent(this.element.nativeElement, 'mouseleave').pipe(map(_ => false));
   
    merge(leave$, enter$).pipe(
      untilDestroyed(this),
      switchMap(show => {
        if (!show) {
          return of(false);
        }
        return of(true).pipe(delay(this.delay))
      }
    )
  ).subscribe(show => {
    console.log(Date.now(), " block id ", this.block.BlockId, "show: ", show);
    this.SetFocused(show);
  });
  }

  get TranscriptText(): string {
    return this.block.Items.map(item => item.Content).join(' ');
  }

  get IsExpanded(): boolean {
    return this.IsSelected || this.IsFocused;
  }
}
