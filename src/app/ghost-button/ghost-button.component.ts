import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ghost-button',
  templateUrl: './ghost-button.component.html',
  styleUrls: ['./ghost-button.component.scss']
})
export class GhostButtonComponent implements OnInit {

  private _text: string;
  private _link: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set text(text: string) {
    this._text = (text && text.trim()) || 'Hover me';
  }

  get text(): string {
    return this._text;
  }

  get link():string{
    return this._link;
  }

  @Input()
  set link(link :string){
    this._link = link;
  }

}
