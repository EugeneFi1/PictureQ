import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditModulesComponent } from './edit-modules/edit-modules.component';
import { ViewModulesComponent } from './view-modules/view-modules.component';
import { InsertPictureComponent } from './edit-modules/insert-picture/insert-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    EditModulesComponent,
    ViewModulesComponent,
    InsertPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
