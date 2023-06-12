import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { RingoffireService } from '../ringoffire.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;
  playerActive: any;
  i: any;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {


      this.currentCard = this.game.deck.pop()!;
      console.log(this.currentCard);
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);

        this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
      }, 1500);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      console.log('The dialog was closed by', name);
      if (name && name.length > 0) {
        this.game.players.push(name);

      }
    });
  }

}
