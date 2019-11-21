import { createSelector } from '@ngrx/store';
import { getCards } from './app.selectors';
import { IState } from '../reducers/cards.reducer';

export const getAllCards = createSelector(
  getCards,
  (state: IState) => state.cards
 );

export const getLastSelectedCardIndex = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard.index
 );

export const getLastSelectedCardName = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard.name
 );

// export const getLastSelectedCardStatus = createSelector(
//   getCards,
//   (state: IState) => state.lastSelectedCard.isOpen
//  );
