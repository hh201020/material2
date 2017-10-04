 import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
 import { MatMenuTrigger } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'contextmenu-demo',
  template: `
    <div>
      <h3>
        Context Menu Event
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/contextmenu.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <div class="info">
        <p><strong>Note:</strong> ngx-datatable does not provide a context menu feature.
        This demonstrates how you would access the <code>contextmenu</code> event
        to display your own custom context menu.</p>
        <p *ngIf="rawEvent"><strong>Mouse position:</strong> <code>(x: {{rawEvent?.x}}, y: {{rawEvent?.y}})</code></p>
        <p *ngIf="contextmenuRow"><strong>Row:</strong> {{contextmenuRow?.name}}</p>
        <p *ngIf="contextmenuColumn"><strong>Header:</strong>
          name: {{contextmenuColumn?.name}}
          prop: {{contextmenuColumn?.prop}}
        </p>
      </div>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [matMenuTriggerFor]="contextMenu"
        (tableContextmenu)="onTableContextMenu($event)">
      </ngx-datatable>
      
      <mat-menu #contextMenu="matMenu">
        <button md-menu-item (click)="clickHandler('Item 1 of Menu ')">Menu: Item 1</button>
        <button md-menu-item (click)="clickHandler('Item 2 of Menu ')">Menu: Item 2</button>
      </mat-menu>

    </div>
  `
})
export class LocalContextMenuTableDemo {

  rows =   [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Johnson, Johnson and Partners, LLC CMP DDC",
        "age": 22
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud",
        "age": 55
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity",
        "age": 67
    }];

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;

  constructor() {
  }
   @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
   @Output() clickedItem = new EventEmitter<string>();

  clickHandler(item: string) {
    alert(item + this.contextmenuRow.name);
    this.clickedItem.emit(item);
  }

  onTableContextMenu(contextMenuEvent) {
    console.log(contextMenuEvent);

    this.rawEvent = contextMenuEvent.event;
    if (contextMenuEvent.type === 'body') {
      this.contextmenuRow = contextMenuEvent.content;
      this.contextmenuColumn = undefined;
    } else {
      this.contextmenuColumn = contextMenuEvent.content;
      this.contextmenuRow = undefined;
    }

    contextMenuEvent.event.preventDefault();
    contextMenuEvent.event.stopPropagation();

    this.contextMenu.openMenu();
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

}