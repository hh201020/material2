import {Component, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'local-contextmenu-table',
  templateUrl: 'local-contextmenu-table.html',
  styleUrls: ['local-contextmenu-table.css'],
})
export class LocalContextMenuTableDemo {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  openContextMenu(event) {
    event.preventDefault();
    this.contextMenu.openMenu();
  }
  
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
