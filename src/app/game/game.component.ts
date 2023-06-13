import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { RingoffireService } from '../ringoffire.service';
import { Observer } from 'rxjs';


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


  constructor(public dialog: MatDialog, private gameService: RingoffireService) { }

  ngOnInit(): any {
    this.newGame();
    this.gameService.getAll().valueChanges().subscribe((games: Game[]) => {

      console.log('object :>> ', games);
      
    });
  }

  newGame() {
    this.game = new Game();
    this.gameService.create(this.game).then((docRef: { id: any; }) => {
      console.log('Document written with ID: ', docRef.id);

    });
      
  }

  takeCard() {
    if (!this.pickCardAnimation) {


      this.currentCard = this.game.deck.pop()!;
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
      if (name && name.length > 0) {
        this.game.players.push(name);

      }
    });
  }

}


