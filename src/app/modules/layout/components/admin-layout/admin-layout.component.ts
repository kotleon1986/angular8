import {Component, ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuLayouts } from 'src/app/constants/menu-items';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  layout: string;
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) { }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.layout = MenuLayouts.ADMIN;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
