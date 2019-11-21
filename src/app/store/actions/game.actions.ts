import { Action } from '@ngrx/store';

export enum GameActionTypes {
  Start = '[Game] Start game',
  Stop = '[Game] Stop game',
}

export class StartGame implements Action {
  public static readonly TYPE = GameActionTypes.Start;
  public type = StartGame.TYPE;
}

export class StopGame implements Action {
  public static readonly TYPE = GameActionTypes.Stop;
  public type = StopGame.TYPE;
}

export type GameActions = StartGame | StopGame;
