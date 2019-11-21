import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { IAppState } from '../../store/app.store';
import { Store } from '@ngrx/store';
import { getGameStatus } from '../../store/selectors/game.selectors';
import { StartGame } from '../../store/actions/game.actions';
import { getAllCards, getLastSelectedCardIndex, getLastSelectedCardName } from '../../store/selectors/card.selectors';
import { Observable } from 'rxjs';
import { SetLastSelectedCard } from '../../store/actions/card.actions';

import { ICard } from '../../interfaces';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @ViewChild('cardsContainer', {static: false}) cardsContainer: ElementRef;

  public memoryCards;
  public lastIndex$: Observable<any>;
  public lastName$: Observable<any>;
  public gameStatus = true;
  public lastSelectedCard: ICard;
  public interval;
  public subscribeTimer = 0;

  constructor(private store: Store<IAppState>) { }

  public ngOnInit() {

    this.lastIndex$ = this.store.select(getLastSelectedCardIndex);
    this.lastName$ = this.store.select(getLastSelectedCardName);
  }

  public startGame(): void {
    this.gameStatus = false;

    this.store.select(getAllCards)
    .subscribe(data =>
      this.memoryCards = data.sort(() => Math.random() - 0.5));

    this.startTimer();
  }

  public stopGame(): void {
    this.gameStatus = true;
    this.memoryCards = [];
    this.subscribeTimer = 0;

    this.stopTimer();
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
  }

  public hasAPare(name) {
    let previousCard;
    this.lastName$.subscribe(data => previousCard = data);

    if (previousCard.name) {
      if (previousCard.name === name) {

      }
    }
  }

  public startTimer(): void {
    this.interval = setInterval(() => {
      this.subscribeTimer += 1;
    }, 1000);
  }

  public stopTimer() {
    clearInterval(this.interval);
  }
}
