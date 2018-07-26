import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

  private _text: string;
  private _link:string;
  constructor() { }

  ngOnInit() {
  }

  get text(): string {
    return this._text;
  }

  @Input('text')
  set text(text: string) {
    this._text = text || "Hover me";
  }

  get link():string{
    return this._link;
  }

  @Input()
  set link(link:string){
    this._link = link;
  }
}
