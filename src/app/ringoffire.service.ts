import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GameData } from 'src/models/game.data.model';




@Injectable({
  providedIn: 'root'
})
export class RingoffireService {

  private dbPath = '/games';

  gameRef: AngularFirestoreCollection<GameData>;

  constructor(private db: AngularFirestore) { 
    this.gameRef = db.collection<GameData>(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<GameData> {
    return this.gameRef;
  }

  create(games: GameData): any {
    return this.gameRef.add(games.toJson());
  }

  update(id: string, data: any): Promise<void> {
    return this.gameRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.gameRef.doc(id).delete();
  }
}
