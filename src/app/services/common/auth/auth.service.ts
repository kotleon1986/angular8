import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(data) {
    return this.apiService.request('auth.login', data);
  }


}
