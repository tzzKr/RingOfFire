export interface Game {
    players: string[];
    stack: string[];
    playedCards: string[];
    currentPlayer: number;
    pickCardAnimation: boolean;
    currentCard: string;
    toJson: () => {
      players: string[];
      stack: string[];
      playedCards: string[];
      currentPlayer: number;
      pickCardAnimation: boolean;
      currentCard: string;
    };
  }
  