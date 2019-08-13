import {Component, OnInit, Input} from '@angular/core';
import {
  MenuItems,
  AdminMenuItems,
  MenuLayouts
} from 'src/app/constants/menu-items';
import {MenuItem} from '../../../../interfaces/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() layout: string;

  menuItems: MenuItem[];
  isAdminLayout: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAdminLayout = this.layout === MenuLayouts.ADMIN;
    this.menuItems = this.isAdminLayout ? AdminMenuItems : MenuItems;
  }

}
