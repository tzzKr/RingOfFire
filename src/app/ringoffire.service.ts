import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game.data.model';

// export interface Gam {
//   name: string;
//   id: string;
//   player: string;
// }

@Injectable({
  providedIn: 'root'
})
export class RingoffireService {

  private dbPath = '/games';

  gameRef: AngularFirestoreCollection<Game>;

  constructor(private db: AngularFirestore) { 
    this.gameRef = db.collection<Game>(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Game> {
    return this.gameRef;
  }

  create(games: Game): any {
    return this.gameRef.add(games);
  }

  update(id: string, data: any): Promise<void> {
    return this.gameRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.gameRef.doc(id).delete();
  }
}
