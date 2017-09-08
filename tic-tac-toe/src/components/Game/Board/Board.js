import React, { Component } from 'react';
import './Board.css';
import Square from './Square/Square'
/**
 * 整个棋盘
 * @props
 *   squares array 棋块的显示的值
 *   onClick function 每个棋块点击时触发的事件
 */
class Board extends Component {

    renderSquare (i) {

        const isHighlight = this.props.winnerSquare.indexOf(i) !== -1; // 高亮

        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                isHighlight={isHighlight}
            />
        );
    }
    render () {

        const rowNumber = 3;
        const colNumber = 3;
        const rowEls = [];
        var total = 0;

        for(let row=0; row<rowNumber; row++){

            let colEls = [];

            for(let col=0; col<colNumber; col++){
                colEls.push(this.renderSquare(total));
                total++;
            }

            rowEls.push((
                <div key={row} className="board-row">
                    {colEls}
                </div>
            ));
        }

        return (
            <div>
                {rowEls}
            </div>
        );
    }
}

export default Board;