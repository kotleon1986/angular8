import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit, OnDestroy {

  protected destroy: Subject<boolean> = new Subject<boolean>();

  ngOnInit() { }

  ngOnDestroy(): void {
    console.log('came');
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

}
