import { createSelector } from '@ngrx/store';
import { getCards } from './app.selectors';
import { IState } from '../reducers/cards.reducer';

export const getAllCards = createSelector(
  getCards,
  (state: IState) => state.cards
 );

export const getLastSelectedCardIndex = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard.indexes
 );

export const getLastSelectedCardName = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard.name
 );

export const getPareIndexes = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard.pares
 );

export const getCard = createSelector(
  getCards,
  (state: IState) => state.lastSelectedCard
 );

