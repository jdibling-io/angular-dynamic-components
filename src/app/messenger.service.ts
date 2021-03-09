import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private selectionSubject: Subject<boolean> = new Subject<boolean>();
  SelectionChange$: Observable<boolean> = this.selectionSubject.asObservable();

  ToggleSelection(state: boolean) {
    this.selectionSubject.next(state);
  }

  constructor() { }
}
