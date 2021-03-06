import React from 'react';
import sudoku from 'sudoku-umd';
import Tile from './Tile';

class Board extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const grid = sudoku.board_string_to_grid(this.props.board);
        let result = [];
        let rows = [];
        let tileNumber = -1;
        let tileValue;
        let tileReadOnly;
        for (let rowNumber = 0; rowNumber < grid.length; rowNumber++) {
            const row = grid[rowNumber];

            rows = [];
            for (let column = 0; column < row.length; column++) {
                tileNumber++;
                tileValue = row[column];
                if (tileValue == '.') {
                    tileValue = '';
                }
                if (this.props.initialBoard.charAt(tileNumber) != '.') {
                    tileReadOnly = true;
                } else {
                    tileReadOnly = false;
                }
                rows.push(<Tile key={tileNumber} number={tileNumber} value={tileValue} readOnly={tileReadOnly} onChange={this.props.handleTileChange} />);
            }
            result.push(
            <div key={rowNumber}>{rows}</div>
            );
        }
        return(
            result
        );
    }
}

export default Board;