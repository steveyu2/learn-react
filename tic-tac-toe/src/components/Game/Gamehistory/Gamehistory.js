import React, { Component } from 'react';
import './Gamehistory.css'
/**
 * 历史步数
 * @props
 *   history array 历史棋盘
 *   onClick function 每个步骤点击时触发的事件
 */
class Gamehistory extends Component {

    setText (step, move, stepNumber) {

        // 第0步为game start
        const text = move ?
            'Move #' + step.zIndex :
            'Game start';

        // 为当前步数 加粗
        return stepNumber === move?<b>{text}</b>:text;
    }

    render () {

        const history = this.props.history;
        const onclick = this.props.onClick;
        const stepNumber = this.props.stepNumber;
        const historyStepSort = this.props.historyStepSort;

        const els = history.map((step, move) => {

            return (
                <li key={move}>
                    <a href="#" onClick={() => onclick(move)}>{this.setText(step, move, stepNumber)}</a>
                </li>
            );
        });

        historyStepSort === 'DESC' && els.reverse();

        return(
            <ol>{els}</ol>
        )
    }
}

export default Gamehistory;