import React from 'react';
import ReactDOM from 'react-dom';
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

class Board extends React.Component{
   constructor(props){
       super(props);
       this.state={
           value:Array(9).fill(null),
           nextPerson: true
       }
   }
   onClick(i){
       const value = this.state.value.slice();
       if (calculateWinner(value) || value[i]) {
           return;
       }
       value[i] = this.state.nextPerson ? 'X' : 'O';
       this.setState({value:value, nextPerson:!this.state.nextPerson});
   }
   renderSquare(i){
       return(
           <Square onClick={()=>{this.onClick(i)}} value={this.state.value[i]}/>
       )
   }
    render(){
        const winner = calculateWinner(this.state.value);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.nextPerson ? 'X' : 'O');
        }
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        )
    }

}

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

function calculateWinner(value){
    const line = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < line.length ; i++){
        const [a,b,c] = line[i];
        if (value[a] && value[a] === value[b] && value[a] === value[c]){
            return value[a];
        }
    }
    return null;
}