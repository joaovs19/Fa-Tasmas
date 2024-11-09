import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caca-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caca-page.component.html',
  styleUrls: ['./caca-page.component.scss']
})
export class CacaPageComponent {
  games = [
    { 
      homeTeam: 'NOV', 
      awayTeam: 'OP', 
      date: new Date('2024-11-09T17:00:00'), 
      score: '0 x 0',
      homeTeamLogo: 'assets/novorizontino.png', // URL do logo do Novorizontino
      awayTeamLogo: 'assets/operario.png'       // URL do logo do Operário
    },
    { 
      homeTeam: 'OP', 
      awayTeam: 'MIR', 
      date: new Date('2024-11-15T16:00:00'), 
      score: '0 x 0',
      homeTeamLogo: 'assets/operario.png',      // URL do logo do Operário
      awayTeamLogo: 'assets/mirassol-.png'         // URL do logo do Time D
    },
    { 
      homeTeam: 'CRB', 
      awayTeam: 'OP', 
      date: new Date('2024-11-24T16:00:00'), 
      score: '0 x 0',
      homeTeamLogo: 'assets/crb.png',        // URL do logo do Time E
      awayTeamLogo: 'assets/operario.png'         // URL do logo do Time F
    }
  ];

  currentIndex = 0;
  isLive = false;
  currentGame = this.games[this.currentIndex];

  constructor() {
    this.updateGame();
  }

  nextGame(): void {
    if (this.currentIndex < this.games.length - 1) {
      this.currentIndex++;
      this.updateGame();
    }
  }

  prevGame(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateGame();
    }
  }

  updateGame(): void {
    this.currentGame = this.games[this.currentIndex];
    this.isLive = new Date() >= this.currentGame.date;
  }

  openModal(): void {
    console.log('Abrindo modal');
  }
}
