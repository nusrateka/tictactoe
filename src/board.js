import React from 'react';
import './index.css';
import Square from './square';
import calculateWinner from './calculateWinner';

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
export default Board;