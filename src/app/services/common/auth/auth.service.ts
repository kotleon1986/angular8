import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import StorageHelper from '../../../helpers/storage.helper';
import User from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login(data) {
    return this.apiService.request('auth.login', data);
  }

  user(): User {
    const token = StorageHelper.get('token');
    if (!token) {
      return null;
    }

    const jwtHelper = new JwtHelperService();
    const decoded = jwtHelper.decodeToken(token);
    const {name, email, role, avatar} = decoded;
    return {name, email, role, avatar};
  }

  logout() {
    return StorageHelper.remove('token');
  }
}
