import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  @Input() openSideNav: boolean = false;
  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter();

  public setOpen: boolean = false;

  public handleBackdropClick() {
    this.closeSidenav.emit(false);
  }

}
