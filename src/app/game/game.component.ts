import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { RingoffireService } from '../ringoffire.service';
import { ActivatedRoute } from '@angular/router';
import { GameJson } from 'src/models/game.data.model';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() containerPlayerActive: boolean = false;

  game!: Game;
  gameId!: string;
  gameOver: boolean = false;
  

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private gameService: RingoffireService) { }

  ngOnInit(): any {
    this.newGame();
    this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.gameService.getAll().doc(this.gameId).valueChanges().subscribe((games: GameJson) => {
        this.game.currentCard = games.currentCard;
        this.game.currentPlayer = games.currentPlayer;
        this.game.pickCardAnimation = games.pickCardAnimation;
        this.game.playedCards = games.playedCards;
        this.game.players = games.players;
        this.game.stack = games.stack;
      });
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {

    if (this.game.stack.length === 0) {
      this.gameOver = true
    }

    if (!this.game.pickCardAnimation && this.game.players.length > 1 && this.game.stack.length > 0) {
      this.game.currentCard = this.game.stack.pop()!;
      this.game.pickCardAnimation = true;
      this.gameService.update(this.gameId, this.game.toJson());
      setTimeout(() => {
        this.game.pickCardAnimation = false;
        this.game.playedCards.push(this.game.currentCard);
        this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
        this.gameService.update(this.gameId, this.game.toJson());
      }, 1500);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.gameService.update(this.gameId, this.game.toJson());
      }
    });
  }
}


