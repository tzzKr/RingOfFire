export interface GameJson {
  players: string[];
    stack: string[];
    playedCards: string[];
    currentPlayer: number;
    pickCardAnimation: boolean;
    currentCard: any;
}
 
// export interface GameData {
//     players: string[];
//     stack: string[];
//     playedCards: string[];
//     currentPlayer: number;
//     pickCardAnimation: boolean;
//     currentCard: any;
//     toJson: () => {
//       players: string[];
//       stack: string[];
//       playedCards: string[];
//       currentPlayer: number;
//       pickCardAnimation: boolean;
//       currentCard: any;
//     };
//   }
  