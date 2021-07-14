import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditModulesComponent } from './edit-modules/edit-modules.component';
import { ViewModulesComponent } from './view-modules/view-modules.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TestComponent } from './test/test.component';
import {CustomerModule} from './test/customer/customer.module';
import { CreateQuestComponent } from './edit-modules/create-quest/create-quest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {createQuestFeatureKey, reducer} from './store/reducer/create-quest.reducer';
import {QuestComponent} from './view-modules/list-of-quests/quests/quest/quest.component';
import {ListOfQuestsComponent} from './view-modules/list-of-quests/list-of-quests.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {SearchHeaderComponent} from './view-modules/list-of-quests/search-header/search-header.component';
import {QuestsComponent} from './view-modules/list-of-quests/quests/quests.component';
import {SharedModule} from './shared/shared.modules';


@NgModule({
  declarations: [
    AppComponent,
    EditModulesComponent,
    ViewModulesComponent,
    TestComponent,
    CreateQuestComponent,
    ListOfQuestsComponent,
    QuestsComponent,
    QuestComponent,
    NotFoundPageComponent,
    SearchHeaderComponent,
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
