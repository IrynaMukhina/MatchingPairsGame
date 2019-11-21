import {
  SetLastSelectedCard, CardsActions, SetCards, FlipCard
} from '../actions/card.actions';
import { ICard } from 'src/app/interfaces';

export interface IState {
  cards: Array<ICard>;
  lastSelectedCard: {
    name: string,
    index: number
  };
}

export const initialState: IState = {
  cards: [],
  lastSelectedCard: {
    name: null,
    index: null
  }
};

export function cardReducer(state = initialState, action: CardsActions): IState {
  const { type, payload } = action;

  switch (type) {
    case SetCards.TYPE:
      return {
        ...state,
        cards: payload
      };

    case SetLastSelectedCard.TYPE:
      return {
        ...state,
        lastSelectedCard: {
          name: payload.name,
          index: payload.index
        }
      };

    case FlipCard.TYPE:
      return {
        ...state,
      };

    default:
      return state;
  }
}


