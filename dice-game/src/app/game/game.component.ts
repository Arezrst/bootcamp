import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GameService } from '../../game.service';
import { winnerService } from '../../winner.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  // ViewChildren, we add #name to a element in HTML and it returned special properties to that element and ofc it could be amount of elements.
  constructor(
    private gameService: GameService,
    private router: Router,
    private winnerService: winnerService
    ) {}
    
    @ViewChildren('dice') dices!: QueryList<ElementRef>;
  //variables
  gamers: any = [];
  count: number = 0;
  score1: number = 0;
  score2: number = 0;
  winner: any = [];
  win: any = [];

  ngOnInit(): void {
    this.Gamers();
    this.winner = this.winnerService.getWinner();
    console.log(this.winner);
    this.win.push({
      winnerName: this.winner.winnerName,
      loserName: this.winner.loserName,
    });
  }

  Gamers() {
    this.gameService.getNameOfGamers().subscribe((data) => {
      this.gamers.push({
        First: data.First,
        Second: data.Second,
      });
      console.log(this.gamers.First);
      
    });
  }

  onClick() {
    this.dices.forEach((el) => {
      let rand = Math.floor(Math.random() * 6) + 1;
      el.nativeElement.src = `assets/${rand}.PNG`;
    });
  }
}
