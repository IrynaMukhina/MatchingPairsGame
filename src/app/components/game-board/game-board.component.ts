import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { IAppState } from '../../store/app.store';
import { Store } from '@ngrx/store';
// import { getGameStatus } from '../../store/selectors/game.selectors';
// import { StartGame } from '../../store/actions/game.actions';
import { getAllCards, getLastSelectedCardIndex, getLastSelectedCardName, getPareIndexes, getCard } from '../../store/selectors/card.selectors';
import { Observable } from 'rxjs';
import { SetLastSelectedCard, ResetLastSelectedCard, SetPareCards, SetCards, ClearCards } from '../../store/actions/card.actions';

import { ICard } from '../../interfaces';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @ViewChild('cardsContainer', {static: false}) cardsContainer: ElementRef;

  public memoryCards$;
  public lastIndexes: Array<number>;
  public pareIndexes: Array<number>;
  public lastName$: Observable<any>;
  public gameStatus = true;
  public lastSelectedCard: ICard;
  public interval;
  public subscribeTimer = 0;

  constructor(
    private store: Store<IAppState>,
    private httpService: HttpService
  ) { }

  public ngOnInit() {

    this.store.select(getLastSelectedCardIndex).subscribe((data) => this.lastIndexes = data);

    this.lastName$ = this.store.select(getLastSelectedCardName);
    this.store.select(getPareIndexes).subscribe(data => this.pareIndexes = data);
  }

  public startGame(): void {

    this.httpService.getAllCards()
      .subscribe(
        data => {
          const sortedData = data.sort(() => Math.random() - 0.5);

          this.store.dispatch(new SetCards(sortedData));
        }
      );

    this.gameStatus = false;

    this.memoryCards$ = this.store.select(getAllCards);

    this.startTimer();
  }

  public stopGame(): void {
    this.store.dispatch(new ClearCards());
    this.gameStatus = true;
    this.stopTimer();

    this.subscribeTimer = 0;
  }

  public hasAPare(cardName, cardIndex) {
    let lastName;

    this.lastName$
      .subscribe(data => lastName = data);

    if (lastName) {
      if (lastName === cardName) {
        let indexes;
        this.store.dispatch(new SetLastSelectedCard({name: cardName, index: cardIndex}));
        this.store.select(getLastSelectedCardIndex).subscribe(data => {
          indexes = data;
        });
        // let lastIndexes;
        // this.store.select(getLastSelectedCardName).subscribe(data => lastIndexes = data);
        // const pareIndexes = lastIndexes.filter((el) =>
        // el === cardName);
        // console.log(pareIndexes);

        this.store.dispatch(new SetPareCards(indexes));

      } else {
        this.store.dispatch(new ResetLastSelectedCard());

        this.store.dispatch(new SetLastSelectedCard({name: cardName, index: cardIndex}));
      }
    } else {

      this.store.dispatch(new SetLastSelectedCard({name: cardName, index: cardIndex}));
    }
  }

  // public hasAPare(name) {
  //   let previousCard;
  //   this.lastName$.subscribe(data => previousCard = data);

  //   if (previousCard.name) {
  //     if (previousCard.name === name) {

  //     }
  //   }
  // }

  public startTimer(): void {
    this.interval = setInterval(() => {
      this.subscribeTimer += 1;
    }, 1000);
  }

  public stopTimer() {
    clearInterval(this.interval);
  }
}
