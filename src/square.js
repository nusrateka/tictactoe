import React from 'react';
import './index.css';

class Square extends React.Component{
    render(){
        return(
            <button
                className="square"
                onClick={() => this.props.onClick()}
                value={this.props.value}
            >
                {this.props.value}
            </button>
        )
    }
}

export default Square;