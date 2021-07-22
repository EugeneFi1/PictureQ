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
import {createQuestFeatureKey, reducer} from './store/reducer/create-quest.reducer';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ViewModule} from './modules/view-modules/view.module';
import {SharedModule} from './modules/shared.modules';
import {JwPaginationModule} from 'jw-angular-pagination';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NotFoundPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forFeature(createQuestFeatureKey, reducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    CustomerModule,
    ViewModule,
    SharedModule,
    JwPaginationModule
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
