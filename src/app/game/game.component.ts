import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  player = 'Player';
  computer = 'Computer';

  constructor() { }

  ngOnInit(): void {
  }

 @ViewChild('personPlayer') childOne!: ScoreComponent;
  @ViewChild('computerPlayer') childTwo!: ScoreComponent;

  updateScore(event: string){
    if (event == 'win') {
      this.childOne.incrementScore();
    } else if (event == 'lose') {
      this.childTwo.incrementScore();
    }
  }
}
