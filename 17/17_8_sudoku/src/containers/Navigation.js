import React from 'react';
import style from './Navigation.css';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className={style.navigation}>
                <button type="button" onClick={this.props.handleCheck}>Check</button>
                <button type="button" onClick={this.props.handleNewGame}>New game</button>
                <button type="button" onClick={this.props.handleSolve}>Solve</button>
                <button type="button" onClick={this.props.handleRestart}>Restart</button>
            </div>
        );
    }
}

export default Navigation;