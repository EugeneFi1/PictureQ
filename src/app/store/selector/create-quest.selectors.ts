import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuest from '../reducer/create-quest.reducer';

export const selectQuestState = createFeatureSelector<fromQuest.CreateQuestState>(
  fromQuest.createQuestFeatureKey,
);

export const selectQuest = createSelector(
  selectQuestState,
  (state: fromQuest.CreateQuestState) => state.quest
);
