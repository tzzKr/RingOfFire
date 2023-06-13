import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GameData, GameJson } from 'src/models/game.data.model';




@Injectable({
  providedIn: 'root'
})
export class RingoffireService {

  

  private dbPath = '/games';

  gameRef: AngularFirestoreCollection<GameJson>;

  constructor(private db: AngularFirestore) { 
    this.gameRef = db.collection<GameJson>(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<GameJson> {
    return this.gameRef;
  }

  create(games: GameJson): any {
    return this.gameRef.add(games);
  }

  update(id: string, data: any): Promise<void> {
    return this.gameRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.gameRef.doc(id).delete();
  }
}
