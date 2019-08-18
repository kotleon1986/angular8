import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

import {ApiResponse, ErrorResponse} from '../../../interfaces/response';
import StorageHelper from '../../../helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private router: Router
  ) { }

  successHandler(response: ApiResponse) {
    if (response.success && response.message) {
      // TODO: create messaging service
      // this._message.show('success', response.message);
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
      // this._message.show('error', data.message);
    }

    if (response.status === 401) {
      StorageHelper.clearUser();
      this.router.navigate(['login']);
    }

    return throwError(data);
  }
}
