import {Action, createReducer, on} from '@ngrx/store';
import * as CreateQuestActions from '../action/create-quest.actions';
import {Quest} from '../../models/quest';

export const createQuestFeatureKey = 'createQuest';

export interface CreateQuestState {
  quest: Quest;
}

export const initialState: CreateQuestState = {
  quest: new Quest()
};


export const createQuestReducer = createReducer(
  initialState,
  on(CreateQuestActions.addQuest,
    (state: CreateQuestState, {quest}) => ({
      quest
    }))
);

export function reducer(state: CreateQuestState, action: Action): any {
  return createQuestReducer(state, action);
}
