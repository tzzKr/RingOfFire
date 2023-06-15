import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { RingoffireService } from '../ringoffire.service';
import { GameJson } from 'src/models/game.data.model';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  game: any;

  constructor(private router: Router, private firestore: AngularFirestore, private gameService: RingoffireService) { }
  ngOnInit() {
  }

  startGame() {
    this.game = new Game();
    
     this.gameService.create(this.game.toJson()).then((docRef: { id: any; }) => {
      console.log('Document written with ID: ', docRef.id);
    this.router.navigate(['/game/' + docRef.id]);


    });

  }


}
