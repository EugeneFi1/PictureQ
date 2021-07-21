import {Action, createReducer, on} from '@ngrx/store';
import * as CreateQuestActions from '../action/create-quest.actions';
import {QuestClass} from '../../models/api/questClass';

export const createQuestFeatureKey = 'createQuest';

export interface CreateQuestState {
  quest: QuestClass;
}

export const initialState: CreateQuestState = {
  quest: new QuestClass()
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
