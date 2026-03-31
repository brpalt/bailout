import React from 'react';

const GameBoard = () => {
    const boardSize = 10;
    const tiles = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

    // Render the game board
    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 1fr)`, width: '500px', height: '500px' }}>
            {tiles.map((row, rowIndex) => 
                row.map((tile, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} style={{
                        border: '1px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f0f0f0'
                    }}>
                        {/* Add character and interactive elements here */}
                    </div>
                ))
            )}
        </div>
    );
};

export default GameBoard;