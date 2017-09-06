/*
==========
    model
==========
*/
/**
 * 井字棋模型
 */
class Tictactoe {
    /**
     * constructor
     * @param initVar obj
     *      player1 string 玩家1棋子
     *      player2 string 玩家2棋子
     */
    constructor (initVar) {

        this.player1 = initVar.player1;
        this.player2 = initVar.player2;
    }
    /**
   4  * 获取玩家棋子
     * @returns [string,string] player1和player2的棋子
     */
    getPlayer () {

        return [this.player1, this.player2];
    }
    /**
     * 是否胜利
     * @param squares array 井字棋地图
     * @returns {boolean}|{array} 胜利会把棋子的位置拼成数组返回
     */
    calculateWinner (squares) {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // return squares[a];
                return [a,b,c];
            }
        }

        return false;
    }
    /**
     * 获取下个玩家
     * @param player1IsNext 下一步的状态 (下一步是否是玩家1下棋)
     * @returns {string} 下个玩家的棋子
     */
    getNextPlayer (player1IsNext) {

        const [p1,p2] = this.getPlayer();
        return player1IsNext? p1: p2;
    }
    /**
     * 获取状态文字
     * @param squares 井字棋
     * @param player1IsNext 下一步的状态 (下一步是否是玩家1下棋)
     * @returns {string} 状态文字
     */
    getStatusText (squares, player1IsNext) {

        const isWinner = this.calculateWinner(squares);

        if(isWinner){
            return 'Winner: ' + this.getNextPlayer(!player1IsNext);
        }else{
            return 'Next player: ' + this.getNextPlayer(player1IsNext);
        }
    }
}
/*
==========
    view
==========
*/
/**
 * 一个棋块
 * @props
 *   value string 棋块显示的棋子
 *   onClick function 棋块点击时触发的事件
 */
class Square extends React.Component {

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
/**
 * 整个棋盘
 * @props
 *   squares array 棋块的显示的值
 *   onClick function 每个棋块点击时触发的事件
 */
class Board extends React.Component {

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
/**
 * 历史步数
 * @props
 *   history array 历史棋盘
 *   onClick function 每个步骤点击时触发的事件
 */
class Gamehistory extends React.Component {

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
/**
 * 历史步数
 * @methods
 */
class Game extends React.Component {

    constructor () {

        super();

        // 设置初始棋盘对象
        this.tictactoe = new Tictactoe({
            player1: 'X',
            player2: 'O'
        });

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            player1IsNext: true, // 是否玩家一先下棋
            stepNumber: 0, // 步数
            historyStepSort: 'ASC', // 历史步数显示顺序
        };
    }
    /**
     * 棋块点击事件
     * @param i 被点击的方块
     */
    handleClick (i) {

        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const player1IsNext = this.state.player1IsNext;
        const tict = this.tictactoe;

        // 有一方获胜 或 已经有棋子下落
        if (tict.calculateWinner(squares) || squares[i]){
            return
        }

        // 下个棋子
        squares[i] = tict.getNextPlayer(player1IsNext);

        // 计算位置
        const row = i/3 >= 2? '3':
            i/3 >= 1?
                '2':
                '1';
        const col = (i=>{
            var  = i/3;
            col = parseInt((col-parseInt(col))*100)/100
            return col === 0.66? '3':
                col === 0.33?
                    '2':
                    '1';
        })(i);
        const zIndex = '(' + row + ',' + col + ')';

        this.setState({
            history: history.concat([{
                squares: squares,
                zIndex: zIndex
            }]),
            stepNumber: history.length,
            player1IsNext: !player1IsNext
        });
    }
    /**
     * 步骤点击事件
     * @param step 被点击的的步数
     */
    jumpTo (step) {

        this.setState({
            stepNumber: step,
            player1IsNext: (step % 2) ? false : true,
        });
    }
    /**
     * 改变排序方式
     */
    switchHistoryStepSortType (){

        this.setState({
            historyStepSort: this.state.historyStepSort === 'ASC'?'DESC':'ASC'
        });
    }
    render() {

        const history = this.state.history;
        const stepNumber = this.state.stepNumber;
        const current = history[stepNumber];
        const tict = this.tictactoe;
        const player1IsNext = this.state.player1IsNext;
        const historyStepSort = this.state.historyStepSort;


        // 是否胜利
        const isWinner = tict.calculateWinner(current.squares);
        // 胜利的三个棋子下标
        var winnerSquare = [];

        if(isWinner){
            winnerSquare = isWinner;
        }

        // 状态信息
        const statusText = tict.getStatusText(current.squares, player1IsNext);

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winnerSquare={winnerSquare}/>
                </div>
                <div className="game-info">
                    <div>{statusText}</div>
                    <div>sort：<button
                            className="historyStepSort"
                            onClick={()=>this.switchHistoryStepSortType()}>{historyStepSort}</button></div>
                    <Gamehistory
                        history={history}
                        onClick={(step) => this.jumpTo(step)}
                        stepNumber={stepNumber}
                        historyStepSort={historyStepSort}/>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
