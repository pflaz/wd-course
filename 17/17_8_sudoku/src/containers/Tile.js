import React from 'react';

class Tile extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <input type="number" min="1" max="9" name={"tile[" + this.props.number + "]"} value={this.props.value} onChange={(event) => this.props.onChange(this.props.number, event.target.value)} />
        );
    }
}

export default Tile;