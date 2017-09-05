/*
==========
    model
==========
*/
/*
 井字棋模型
 */
class Tictactoe{
    /**
     * constructor
     * @param initVar obj
     *      player1 string 玩家1棋子
     *      player2 string 玩家2棋子
     */
    constructor(initVar) {
        this.player1 = initVar.player1;
        this.player2 = initVar.player2;
    }
    /**
   4  * 获取玩家棋子
     * @returns [string,string] player1和player2的棋子
     */
    getPlayer (){
        return [this.player1, this.player2];
    }
    /**
     * 是否胜利
     * @param squares array 井字棋地图
     * @returns {boolean}
     */
    calculateWinner(squares){
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
                return true;
            }
        }
        return false;
    }
    /**
     * 获取下个玩家
     * @param isPlayer1Next 下一步的状态 (下一步是否是玩家1下棋)
     * @returns {string} 下个玩家的棋子
     */
    getNextPlayer(isPlayer1Next){
        const [p1,p2] = this.getPlayer();
        return isPlayer1Next? p1: p2;
    }
    /**
     * 获取状态文字
     * @param squares 井字棋
     * @param isPlayer1Next 下一步的状态 (下一步是否是玩家1下棋)
     * @returns {string} 状态文字
     */
    getStatusText(squares, isPlayer1Next) {
        const isWinner = this.calculateWinner(squares);

        if(isWinner){
            return 'Winner: ' + this.getNextPlayer(!isPlayer1Next);
        }else{
            return 'Next player: ' + this.getNextPlayer(isPlayer1Next);
        }
    }
}
/*
==========
    view
==========
*/
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    render() {
        var rowNumber = 3;
        var colNumber = 3;
        var rowEls = [];

        for(let row=0; row<rowNumber; row++){
            let colEls = [];

            for(let col=0; col<colNumber; col++){
                console.log((row+1)*(col+1))
                colEls.push(this.renderSquare((row+1)*col));
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
class Gamehistory extends React.Component{
    render(){
        const history = this.props.history;
        const onclick = this.props.onClick;

        const els = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => onclick(move)}>{desc}</a>
                </li>
            );
        });
        return(
            <ol>{els}</ol>
        )
    }
}
class Game extends React.Component {
    constructor() {
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
            player1IsNext: true, // 玩家一先下棋
            stepNumber: 0, // 第零步
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const nextPlay = this.state.xIsNext;
        const tict = this.tictactoe;

        // 有一方获胜 或 已经有棋子下落
        if (tict.calculateWinner(squares) || squares[i]){
            return
        }
        // 下个棋子
        squares[i] = tict.getNextPlayer(nextPlay);

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const tict = this.tictactoe;
        const nextPlay = this.state.xIsNext;

        // 状态信息
        let statusText = tict.getStatusText(current.squares, nextPlay);

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{statusText}</div>
                    <Gamehistory
                        history={history}
                        onClick={(step) => this.jumpTo(step)}/>
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
