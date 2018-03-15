import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { UserPaneComponent } from './user-pane/user-pane.component';
import { HomePaneComponent } from './home-pane/home-pane.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftPaneComponent,
    RightPaneComponent,
    UserPaneComponent,
    HomePaneComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
