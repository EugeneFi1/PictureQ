import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {QuestService} from '../../services/quest.service';
import {exhaustMap} from 'rxjs/operators';



@Injectable()
export class QuestEffects {
  // @ts-ignore
  createQuest$ = createEffect();


  constructor(private actions$: Actions, private questService: QuestService) {}

}
