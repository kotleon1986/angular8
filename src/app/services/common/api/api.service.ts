import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {InterceptorService} from '../interceptor/interceptor.service';
import {environment} from '../../../../environments/environment';
import {ApiResponse, ErrorResponse} from '../../../interfaces/response';

import _ from 'lodash';
import Endpoints from './api.config';
import {Endpoint} from '../../../interfaces/endpoint';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = environment.url;

  constructor(
    private http: HttpClient,
    private interceptorService: InterceptorService
  ) { }

  request(endpoint: string, params?: number|string|number[]|string[]|object, body?: object): Observable<any> {
    const { method, url } = _.get(Endpoints, endpoint);
    return this.response(this.http[method](this.url(url, params), body || params));
  }

  private response(request: Observable<any>): Observable<any> {
    return request.pipe(
      map((data: ApiResponse) => this.interceptorService.successHandler(data)),
      catchError((response: ErrorResponse) => this.interceptorService.errorHandler(response))
    );
  }

  private url(url: string, params?: number|string|number[]|string[]|object): string {
    url = `${this.apiBaseUrl}${url}`;

    if (Number(params) || typeof params === 'string') {
      url += `/${params}`;
    } else if (Array.isArray(params)) {
      params.forEach(param => (url += `/${param}`));
    }

    return url;
  }

}
