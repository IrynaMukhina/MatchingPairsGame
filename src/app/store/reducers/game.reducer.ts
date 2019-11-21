import {
  StartGame, StopGame, GameActions
} from '../actions/game.actions';

export interface IState {
  gameStatus: boolean;
}

export const initialState: IState = {
  gameStatus: false
};

export function gameReducer(state = initialState, action: GameActions): IState {
  switch (action.type) {
    case StartGame.TYPE:
      return {
        ...state,
        gameStatus: true
      };

    case StopGame.TYPE:
      return {
        ...state,
        gameStatus: false
      };
  }
}
