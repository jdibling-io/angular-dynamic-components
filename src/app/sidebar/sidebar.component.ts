import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlockStatus } from '../messenger.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() blocks: BlockStatus[];

  NumSelected: number = 0;
  NumFocused: number = 0;
  NumFocusing: number = 0;

  constructor() { }
  ngOnInit(): void {  
    this.updateCounts(this.blocks);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blocks) {
      this.updateCounts(changes.blocks.currentValue)
    }
  }

  private updateCounts(blocks: BlockStatus[]) {
    this.NumSelected = blocks.filter(block => block.Selected).length;
    this.NumFocused = blocks.filter(block => block.Focused).length;
    this.NumFocusing = blocks.filter(block => block.Focusing).length;
  }

}
