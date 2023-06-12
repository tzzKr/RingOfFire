import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

interface Player {
  name: string;
   id: string;
   player: string;
 }

@Injectable({
  providedIn: 'root'
})


export class RingoffireService {

  private gameCollection: CollectionReference<DocumentData>;


  constructor(private readonly firestore: Firestore) { 
    this.gameCollection = collection(this.firestore, 'games');

  }

  getAll() {
    return collectionData(this.gameCollection, {
      idField: 'id',
    }) as Observable<any>;
  }

  get(id: string) {
    const gameDocumentReference = doc(this.firestore, `games/${id}`);
    return docData(gameDocumentReference, { idField: 'id' });
  }

  create(game: any) {
    return addDoc(this.gameCollection, game);
  }

  update(game: any) {
    const gameDocumentReference = doc(
      this.firestore,
      `games/${game.id}`
    );
    return updateDoc(game, { ...game });
  }


  delete(id: string) {
    const gameDocumentReference = doc(this.firestore, `games/${id}`);
    return deleteDoc(gameDocumentReference);
  }

  
  
  



}
