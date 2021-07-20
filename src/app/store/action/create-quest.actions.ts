import { createAction } from '@ngrx/store';
import {QuestClass} from '../../models/api/questClass';

export const addQuest = createAction(
  '[QuestClass] Add QuestClass',
  (quest: QuestClass) => ({quest})
);
