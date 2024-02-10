import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public openSideNav: boolean = false;

  ngOnInit(): void { }

  public onMenuClick() {
    this.openSideNav = !this.openSideNav;
  }
  public setcloseToSidenav(event: boolean) {
    this.openSideNav = event;
  }

}
