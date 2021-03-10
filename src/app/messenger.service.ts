import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BlockStatus {
  constructor(
    public BlockId: number,
    public Focusing: boolean, // true while focusing a block is being delayed
    public Focused: boolean, // true if a block is focused
    public Selected: boolean, //  true if a block has been explicitly selected
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private blockStateSubject: BehaviorSubject<Object> = new BehaviorSubject({});
  public Blocks$: Observable<BlockStatus[]> = this.blockStateSubject.asObservable().pipe(
    map((state: Object)=> Object.values(state))
  );
  SetBlockState(blockId: number, state: Partial<BlockStatus>) {
    let upd: Object = this.blockStateSubject.getValue();
    upd[blockId] = {...upd[blockId], ...state};
    this.blockStateSubject.next(upd);
  }

  constructor() { }
}
