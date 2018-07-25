import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ghost-button',
  templateUrl: './ghost-button.component.html',
  styleUrls: ['./ghost-button.component.scss']
})
export class GhostButtonComponent implements OnInit {

  private _name: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no-name-set>';
  }

  get name(): string {
    return this._name;
  }

}
