// Type definitions for the Bailout game

// Represents a Team in the game
interface Team {
    id: string;
    name: string;
    members: Character[];
}

// Represents a class of character with specific attributes and abilities
interface CharacterClass {
    id: string;
    name: string;
    abilities: string[];
}

// Represents a position on the game board
interface Position {
    x: number;
    y: number;
}

// Represents a tile on the game board
interface Tile {
    id: string;
    position: Position;
    type: string;
}

// Represents a character in the game with specific attributes and state
interface Character {
    id: string;
    name: string;
    position: Position;
    characterClass: CharacterClass;
    health: number;
    actions: GameAction[];
}

// Represents the state of the game
interface GameState {
    teams: Team[];
    characters: Character[];
    currentTurn: number;
    gameOver: boolean;
}

// Represents a potential action a character can take
interface GameAction {
    id: string;
    type: string;
    target: Character | Tile;
    payload?: any;
}

// Represents an event that occurs during the game
interface GameEvent {
    id: string;
    type: string;
    timestamp: Date;
    payload: any;
}

// Represents a player in the game
interface Player {
    id: string;
    name: string;
    teamId: string;
    characterId?: string;
}

// Represents a session of the game
interface GameSession {
    id: string;
    state: GameState;
    players: Player[];
    startTime: Date;
    endTime?: Date;
}

// Represents the result of a dice roll
interface DiceRoll {
    diceType: string;
    result: number;
}