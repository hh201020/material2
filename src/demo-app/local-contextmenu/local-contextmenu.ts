import {Component, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'local-contextmenu',
  templateUrl: 'local-contextmenu.html',
  styleUrls: ['local-contextmenu.css'],
})
export class LocalContextMenuDemo {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  openContextMenu(event) {
    event.preventDefault();
    this.contextMenu.openMenu();
  }
}
