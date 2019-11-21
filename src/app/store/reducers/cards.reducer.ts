import {
  SetLastSelectedCard, CardsActions, SetCards, ResetLastSelectedCard, SetPareCards, ClearCards
} from '../actions/card.actions';
import { ICard } from 'src/app/interfaces';

export interface IState {
  cards: Array<ICard>;
  lastSelectedCard: {
    name: string,
    indexes: Array<number>,
    pares: Array<number>
  };
}

export const initialState: IState = {
  cards: [],
  lastSelectedCard: {
    name: null,
    indexes: [],
    pares: []
  },
};

export function cardReducer(state = initialState, action: CardsActions): IState {
  const { type, payload } = action;
  const pares = [...state.lastSelectedCard.pares];

  switch (type) {
    case SetCards.TYPE:
      return {
        ...state,
        cards: payload
      };

    case SetLastSelectedCard.TYPE:
      const newIndexes = [...state.lastSelectedCard.indexes, payload.index];
      return {
        ...state,
        lastSelectedCard: {
          name: payload.name,
          indexes: newIndexes,
          pares: [...pares]
        }
      };

    case ResetLastSelectedCard.TYPE:
      return {
        ...state,
        lastSelectedCard: {
          name: null,
          indexes: [],
          pares: [...pares]
        }
      };

    case SetPareCards.TYPE:
      const newPares = [...state.lastSelectedCard.pares, ...payload];

      return {
        ...state,
        lastSelectedCard: {
          name: null,
          indexes: [],
          pares: [...newPares]
        }
      };
      case ClearCards.TYPE:
      return {
        cards: [],
        lastSelectedCard: {
          name: null,
          indexes: [],
          pares: []
        }
      };

    default:
      return state;
  }
}


