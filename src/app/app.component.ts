import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { IAppState } from './store/app.store';
import { Store } from '@ngrx/store';
import { SetCards } from './store/actions/card.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private httpService: HttpService,
    private store: Store<IAppState>
  ) { }

  public ngOnInit(): void {
    this.setDataToStore();
  }

  public setDataToStore(): void {
    this.httpService.getAllCards()
      .subscribe(
        data => {
          this.store.dispatch(new SetCards(data));
        }
      );
  }
}
