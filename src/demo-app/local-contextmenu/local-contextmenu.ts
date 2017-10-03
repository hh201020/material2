import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'local-contextmenu',
  templateUrl: 'local-contextmenu.html',
  styleUrls: ['local-contextmenu.css'],
})
export class LocalContextMenuDemo {
  selected = '';
  items = [
    {text: 'Ref'},
    {text: 'Set'},
    {text: 'Hel', disabled: true},
    {text: 'Sig'}
  ];

  iconItems = [
    {text: 'Red', icon: 'dialpad'},
    {text: 'Che', icon: 'voicemail', disabled: true},
    {text: 'Dis', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }
}
