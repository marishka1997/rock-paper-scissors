import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() name: string = '';
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  incrementScore(): void{
    this.count++;
  };
}
