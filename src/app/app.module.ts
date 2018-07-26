import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhostButtonComponent } from './ghost-button/ghost-button.component';
import { LinkButtonComponent } from './link-button/link-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GhostButtonComponent,
    LinkButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
