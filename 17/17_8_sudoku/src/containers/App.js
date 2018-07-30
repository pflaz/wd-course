import React from 'react';
import Board from './Board';
import Navigation from './Navigation';

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
                    <Board board={this.state.board} />
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

    handleCheck() {

    }

    handleNewGame() {

    }

    handleSolve() {

    }

    handleRestart = (event) => {
        this.setState({
            board: this.state.initialBoard
        });
    }


}

export default App;