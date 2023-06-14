import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WEAPONSLIST } from '../weaponslist';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  constructor() { }
  playerRPS: any;
  computerRPS: any;
  result: number = 0;
  winner: string = '';
  message: string = '';
  weapons = WEAPONSLIST;
  @Output()
  propagate = new EventEmitter<string>();

  ngOnInit(): void {
  }

  startGame(): void {
    this.computerRPS = this.computerChoice();
    this.winner = this.calculateResult(this.playerRPS, this.computerRPS);
    this.message = this.showResult(this.winner);
    this.propagate.emit(this.winner);
  }

  showResult(winner: string): string {
    if (winner === 'draw') {
      return 'It\'s a draw!';
    } else {
      return 'You ' + winner + '!';
    }
  }

  makeChoice(playerChoice: number): void {
    this.playerRPS = null;
    this.computerRPS = null;
    setTimeout(() =>
    {
      this.playerRPS = playerChoice;
      this.startGame();
    },
    500);
  }

  computerChoice(): number {
    return Math.ceil(Math.random() * 3) - 1;
  }

  calculateResult(player: number, computer: number): string {
    this.result = player - computer;
    if (this.result === 0){
      return 'draw';
    } else if (this.result === 1 || this.result === -2){
      return 'win';
    } else {
      return 'lose';
    }
  }
  resetGame(): void {
    this.playerRPS = null;
    this.computerRPS = null;
    this.result = 0;
    this.winner = '';
    this.message = '';
  }
}
