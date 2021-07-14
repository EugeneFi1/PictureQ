import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TestComponent } from './test/test.component';
import {CustomerModule} from './test/customer/customer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {createQuestFeatureKey, reducer} from './store/reducer/create-quest.reducer';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {SharedModule} from './modules/shared.modules';
import {EditModule} from './modules/edit-modules/edit.module';
import {ViewModule} from './modules/view-modules/view.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forFeature(createQuestFeatureKey, reducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    CustomerModule,
    BrowserAnimationsModule,
    SharedModule,
    EditModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
