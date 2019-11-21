import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IAppState } from '../../store/app.store';
import { Store } from '@ngrx/store';
import { getGameStatus } from '../../store/selectors/game.selectors';
import { StartGame } from '../../store/actions/game.actions';
import { getAllCards, getLastSelectedCardIndex, getLastSelectedCardName } from '../../store/selectors/card.selectors';
import { ICard } from '../../interfaces';
import { Observable } from 'rxjs';
import { SetLastSelectedCard } from '../../store/actions/card.actions';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @ViewChild('cardsContainer', {static: false}) cardsContainer: ElementRef;

  // public memoryCards$ = new Array(12).fill(1);
  public memoryCards;
  public lastIndex$: Observable<any>;
  public lastName$: Observable<any>;
  gameStatus$: Observable<any>;
  public lastSelectedCard: ICard;

  constructor(private store: Store<IAppState>) { }

  public ngOnInit() {

    this.lastIndex$ = this.store.select(getLastSelectedCardIndex);
    this.lastName$ = this.store.select(getLastSelectedCardName);
    this.gameStatus$ = this.store.select(getGameStatus);
  }

  public startGame() {
    this.store.dispatch(new StartGame());

    this.store.select(getAllCards)
    .subscribe(data =>
      this.memoryCards = data.sort(() => Math.random() - 0.5));
  }

  public selectCard(cardName, cardIndex) {
    let lastName;
    this.store.select(getLastSelectedCardName)
      .subscribe(data => lastName = data);

    if (lastName) {
      if (lastName === cardName) {
        this.store.dispatch(new SetLastSelectedCard({name: null, index: null}));
      } else {
        this.store.dispatch(new SetLastSelectedCard({name: cardName, index: cardIndex}));
      }
    } else {
      this.store.dispatch(new SetLastSelectedCard({name: cardName, index: cardIndex}));
    }
    // console.log(cardIndex);
    // console.log(this.lastName$.subscribe(data => console.log(data)));
  }

  public hasAPare(name) {
    let previousCard;
    this.lastName$.subscribe(data => previousCard = data);

    if (previousCard.name) {
      if (previousCard.name === name) {

      }
    }
  }
}
