import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCard from './reducers/cards.reducer';
import * as fromGame from './reducers/game.reducer';

export interface IAppState {
  cards: fromCard.IState;
  game: fromGame.IState;
}

export const appReducer: ActionReducerMap<IAppState> = {
  cards: fromCard.cardReducer,
  game: fromGame.gameReducer
};

export const selectAuthState = createFeatureSelector<IAppState>('auth');
