import { createSelector } from '@ngrx/store';
import { getGame } from './app.selectors';
import { IState } from '../reducers/game.reducer';

export const getGameStatus = createSelector(
  getGame,
  (state: IState) => state.gameStatus
 );
