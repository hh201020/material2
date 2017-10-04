import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'local-contextmenu-table',
  templateUrl: 'local-contextmenu-table.html',
  styleUrls: ['local-contextmenu-table.css'],
})
export class LocalContextMenuTableDemo {
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  row: any;
  @Output() clickedItem = new EventEmitter<string>();

  clickName(item: string) {
    console.log(item + this.row.name);
    this.clickedItem.emit(item);
  }

  clickGender(item: string) {
    console.log(item + this.row.gender);
    this.clickedItem.emit(item);
  }

  clickCompany(item: string) {
    console.log(item + this.row.company);
    this.clickedItem.emit(item);
  }

  openContextMenu(event: any, row: any) {
    this.row = row;
    console.log(this.row);
    console.log(event);
  }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'Name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
