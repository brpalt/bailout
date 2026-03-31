// Core Bail Out Game Engine Implementation

class GameEngine {
    constructor() {
        this.players = [];
        this.state = 'waiting';
    }

    addPlayer(player) {
        this.players.push(player);
    }

    startGame() {
        if (this.players.length < 2) {
            throw new Error('Not enough players to start the game.');
        }
        this.state = 'in progress';
        console.log('Game has started!');
    }

    endGame() {
        this.state = 'finished';
        console.log('Game has ended!');
    }
}

module.exports = GameEngine;