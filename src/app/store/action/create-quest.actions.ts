import { createAction } from '@ngrx/store';
import {Quest} from '../../models/quest';

export const addQuest = createAction(
  '[Quest] Add Quest',
  (quest: Quest) => ({quest})
);
