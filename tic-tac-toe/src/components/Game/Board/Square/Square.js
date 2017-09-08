import React, { Component } from 'react';
import './Square.css';
/**
 * 一个棋块
 * @props
 *   value string 棋块显示的棋子
 *   onClick function 棋块点击时触发的事件
 */
class Square extends Component {

    render () {

        return (
            <button className="square" onClick={this.props.onClick}>
                {
                    !this.props.isHighlight?
                        this.props.value:
                        <span className="textRed">{this.props.value}</span>
                }
            </button>
        );
    }
}

export default Square;