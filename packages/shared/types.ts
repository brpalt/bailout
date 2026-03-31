// TypeScript types for game classes, board state, and game mechanics

// Define constants for COP_CLASSES and ROBBER_CLASSES
export const COP_CLASSES = {
    CLASS_A: 'Class A',
    CLASS_B: 'Class B',
    CLASS_C: 'Class C',
};

export const ROBBER_CLASSES = {
    ROBBER_A: 'Robber A',
    ROBBER_B: 'Robber B',
};

// Define game tile types
type GameTileType = 'START' | 'REGULAR' | 'SPECIAL';

// Define the game state interface
interface GameState {
    board: GameTileType[];
    currentPlayer: string;
    scores: Record<string, number>;
    // other properties can be added as needed
}

// Define classes for game entities
interface GameEntity {
    id: string;
    name: string;
}

interface Player extends GameEntity {
    score: number;
    // other player-specific properties
}

interface Board extends GameEntity {
    tiles: GameTileType[];
    // other board-specific properties
}

// Example of a Game class
class Game {
    state: GameState;
    players: Player[];
    board: Board;

    constructor() {
        this.state = {
            board: [],
            currentPlayer: '',
            scores: {},
        };
        this.players = [];
        this.board = { id: 'board1', name: 'Main Board', tiles: [] };
    }
    // other game methods
}
