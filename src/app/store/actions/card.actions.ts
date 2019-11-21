import { Action } from '@ngrx/store';

export enum CardsActionTypes {
  SetCards = '[Card] Set all cards to store',
  SetLastSelectedCard = '[Card] Decrement',
  ResetSelectedCard = '[Card] Reset',
  SetPareCards = '[Cart] Set Pare',
  ClearCards = '[Cart] Delete Cards'
}

export class SetCards implements Action {
  public static readonly TYPE = CardsActionTypes.SetCards;
  public type = SetCards.TYPE;

  constructor(public readonly payload) { }
}

export class SetLastSelectedCard implements Action {
  public static readonly TYPE = CardsActionTypes.SetLastSelectedCard;
  public type = SetLastSelectedCard.TYPE;

  constructor(public readonly payload) { }
}

export class ResetLastSelectedCard implements Action {
  public static readonly TYPE = CardsActionTypes.ResetSelectedCard;
  public type = ResetLastSelectedCard.TYPE;
}

export class SetPareCards implements Action {
  public static readonly TYPE = CardsActionTypes.SetPareCards;
  public type = SetPareCards.TYPE;

  constructor(public readonly payload) { }
}

export class ClearCards implements Action {
  public static readonly TYPE = CardsActionTypes.ClearCards;
  public type = ClearCards.TYPE;
}


export type CardsActions = any;


