import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() matchPare: false;
  @Input() cardUrl: string;

  constructor() { }

  ngOnInit() {
    console.log(this.isVisible);
  }

  public flippCard(): void {
    this.isVisible = !this.isVisible;
  }

}
