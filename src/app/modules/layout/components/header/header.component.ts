import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/common/auth/auth.service';
import {MenuLayouts} from '../../../../constants/menu-items';
import User from '../../../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() layout: string;

  user: User;
  isAdminLayout: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user();
    this.isAdminLayout = this.layout === MenuLayouts.ADMIN;
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['/']);
  }
}
