import {Component, Input, OnInit} from '@angular/core';
import { MenuLayouts } from "src/app/constants/menu-items";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() layout: string;

  isAdminLayout: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAdminLayout = this.layout === MenuLayouts.ADMIN;
  }
}
