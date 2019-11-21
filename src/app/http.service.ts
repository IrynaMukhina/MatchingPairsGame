import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICard } from 'src/app/interfaces';
import { URLs } from './app.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getAllCards() {
    return this.http.get<Array<ICard>>(URLs.cards);
    // console.log(data);

    // return data;
  }
}
