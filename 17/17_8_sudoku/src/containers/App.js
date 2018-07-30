import React from 'react';
import Board from './Board';
import Navigation from './Navigation';
import sudoku from 'sudoku-umd';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '',
            board: ''
        }
    }


    render() {
        return(
            <div>
                <div>
                    <Board 
                        board={this.state.board}
                        handleTileChange={this.handleTileChange}
                    />
                </div>
                <div>
                    <Navigation
                        handleCheck={this.handleCheck}
                        handleNewGame={this.handleNewGame}
                        handleSolve={this.handleSolve}
                        handleRestart={this.handleRestart}    
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.handleNewGame();
    }

    handleCheck = () => {
        const solution = sudoku.solve(this.state.board);
        if (solution) {
            alert('This sudoku is solvable.');
        } else {
            alert('This sudoku IS NOT solvable');
        }
    }

    handleNewGame = (event) => {
        const newGame = sudoku.generate("easy");
        this.setState({
            initialBoard: newGame,
            board: newGame
        })

    }

    handleSolve = () => {
        const solution = sudoku.solve(this.state.board);
        this.setState({
            board: solution
        })
    }

    handleRestart = (event) => {
        this.setState({
            board: this.state.initialBoard
        });
    }

    handleTileChange = (tileNumber, value) => {
        console.log(value);
        if (value == '' || (value >= '0' && value <= '9')) {
            this.changeValueOnBoardPosition(tileNumber, value);
        }
    }

    changeValueOnBoardPosition = (index, value) => {
        if (value == '') {
            value = '.';
        }
        const newBoard = this.state.board.substring(0, index) + value + this.state.board.substring(index + 1);
        this.setState({
            board: newBoard
        });
    }


}

export default App;