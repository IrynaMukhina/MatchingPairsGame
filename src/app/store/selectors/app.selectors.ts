import { IAppState } from '../app.store';

export const getCards = (state: IAppState) => state.cards;

export const getGame = (state: IAppState) => state.game;

