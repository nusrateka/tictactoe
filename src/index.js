import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';

class Game extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Board/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);