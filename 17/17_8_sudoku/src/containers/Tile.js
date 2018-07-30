import React from 'react';
import style from './Tile.css';

class Tile extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <input 
                className={style.tile + " " + (this.props.readOnly ? style.readOnly : style.normal)} 
                type="number" 
                min="1" 
                max="9" 
                name={"tile[" + this.props.number + "]"}
                value={this.props.value} 
                onChange={(event) => this.props.onChange(this.props.number, event.target.value)} 
                readOnly={this.props.readOnly}/>
        );
    }
}

export default Tile;