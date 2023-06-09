export class Game {
    public players: string[] = [];
    public deck: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {

        for (let i = 1; i < 14; i++) {
            this.deck.push('ace_' + i);
            this.deck.push('clubs_' + i);
            this.deck.push('diamonds_' + i);
            this.deck.push('hearts_' + i);
        }
        shuffleArray(this.deck);
        
        
        
        this.players = [];
        
        this.playedCards = [];
        this.currentPlayer = 0;
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
