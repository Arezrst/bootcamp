import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class winnerService {
  private winner: any;

  setWinner(winner: any): void {
    this.winner = winner;
  }

  getWinner(): any {
    return this.winner;
  }
}