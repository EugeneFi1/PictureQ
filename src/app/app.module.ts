import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditModulesComponent } from './edit-modules/edit-modules.component';
import { ViewModulesComponent } from './view-modules/view-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    EditModulesComponent,
    ViewModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
