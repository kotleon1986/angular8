import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {MessageService} from '../message/message.service';

import {ApiResponse, ErrorResponse} from '../../../interfaces/response';
import StorageHelper from '../../../helpers/storage.helper';
import MessageTypes from '../../../constants/message-types';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  successHandler(response: ApiResponse) {
    if (response.success && response.message) {
      if (response.data && response.data.info) {
        this.messageService.show(MessageTypes.INFO, response.message);
      }

      if (response.data && response.data.warning) {
        this.messageService.show(MessageTypes.WARNING, response.message);
      }

      this.messageService.show(MessageTypes.SUCCESS, response.message);
    }

    if (response.token) {
      StorageHelper.set('token', response.token);
    }

    return response.data;
  }

  errorHandler(response: ErrorResponse) {
    console.log(response);

    const data = response.error;
    if (data.message) {
      this.messageService.show(MessageTypes.ERROR, data.message);
    }

    if (response.status === 401) {
      StorageHelper.clearUser();
      this.router.navigate(['auth/login']);
    }

    return throwError(data);
  }
}
