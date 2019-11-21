import { Action } from '@ngrx/store';

export enum CardsActionTypes {
  SetCards = '[Card] Set all cards to store',
  SetLastSelectedCard = '[Card] Decrement',
  FlipCard = '[Card] Reset'
}

export class SetCards implements Action {
  public static readonly TYPE = CardsActionTypes.SetCards;
  public type = SetCards.TYPE;

  constructor(public readonly payload) {}
}

export class SetLastSelectedCard implements Action {
  public static readonly TYPE = CardsActionTypes.SetLastSelectedCard;
  public type = SetLastSelectedCard.TYPE;

  constructor(public readonly payload) {}
}

export class FlipCard implements Action {
  public static readonly TYPE = CardsActionTypes.FlipCard;
  public type = FlipCard.TYPE;
}

export type CardsActions = any;


