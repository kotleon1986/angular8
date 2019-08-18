import {Component, OnDestroy, OnInit} from '@angular/core';
import {GenericComponent} from '../../../shared/components/generic/generic.component';
import {ApiService} from '../../../../services/common/api/api.service';
import Endpoints from '../../../../services/common/api/api.config';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MessageService} from '../../../../services/common/message/message.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent extends GenericComponent implements OnInit {
  tiles: any[] = [
    {
      text: "One"
    },
    {
      text: "Two"
    },
    {
      text: "Three"
    },
    {
      text: "Four"
    },
    {
      text: "Five"
    },
    {
      text: "Six"
    },
    {
      text: "Seven"
    },
    {
      text: "Eight"
    },
    {
      text: "Nine"
    },
    {
      text: "Ten"
    }
  ];

  constructor(private messageService: MessageService) {
    super();
  }

  ngOnInit() {}

  sntest() {
    // this.messageService.show('success', 'TEST OK');
    // this.messageService.show('info', 'TEST INFO');
    // this.messageService.show('warning', 'TEST WARNING');
    this.messageService.show('error', 'TEST DANGER');
  }
}
