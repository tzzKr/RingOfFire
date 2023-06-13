export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: any = '';



    constructor() {

        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        shuffleArray(this.stack);
        
    }



    public toJson() {
        return {
          players: this.players,
          stack: this.stack,
          playedCards: this.playedCards,
          currentPlayer: this.currentPlayer,
          pickCardAnimation: this.pickCardAnimation,
          currentCard: this.currentCard
        };
      }
      

}



function shuffleArray(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex: number;

    // Solange noch Elemente zu mischen sind
    while (0 !== currentIndex) {
        // Wähle ein verbleibendes Element aus...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Und tausche es mit dem aktuellen Element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
