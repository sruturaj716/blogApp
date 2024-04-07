import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() openSideNav: boolean = false;
  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter();

  public setOpen: boolean = false;
  public showCategories: boolean = false;
  public arrowState: string = 'down';
  public isClicked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleBackdropClick() {
    this.closeSidenav.emit(false);
    this.showCategories = false;
    this.isClicked = false;
    this.arrowState = 'down';
  }

  public onCategories() {
    this.showCategories = !this.showCategories;
    this.isClicked = true;
    this.arrowState = this.arrowState === 'down' ? 'up' : 'down';
  }
}
