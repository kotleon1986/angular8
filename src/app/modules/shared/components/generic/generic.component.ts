import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnDestroy {

  protected destroy: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

}
