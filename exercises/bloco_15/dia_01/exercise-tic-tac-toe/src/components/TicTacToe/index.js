import React from 'react';
import GameBoard from '../GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1, // Jogador 1 e 2
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: null,
    };

    this.changeActivePlayer = this.changeActivePlayer.bind(this);
    this.handleSelectCell = this.handleSelectCell.bind(this);
    this.getActivePlayer = this.getActivePlayer.bind(this);
  }

  handleSelectCell(id) {
    const { gameBoard, activePlayer } = this.state;
    if (gameBoard[id]) return;
    const start = gameBoard.slice(0, id);
    const end = gameBoard.slice(id + 1);
    const newGameBoard = [...start, activePlayer, ...end];
    this.setState(
      { gameBoard: newGameBoard },
      this.checkWinner,
    );
  }

  getActivePlayer() {
    const { activePlayer } = this.state;
    return activePlayer;
  }

  changeActivePlayer() {
    this.setState(({ activePlayer }) => ({
      activePlayer: activePlayer === 1 ? 2 : 1,
    }));
  }

  checkBoardRows() {
    const { gameBoard } = this.state;
    for (let row = 0; row < 3; row += 1) {
      let victory = true;
      for (let col = 0; col < 2; col += 1) {
        const index = col + (row * 3);
        if (gameBoard[index] === 0
          || gameBoard[index] !== gameBoard[index + 1]) {
          victory = false;
          break;
        }
      }
      if (victory) return true;
    }
    return false;
  }

  checkBoardColumns() {
    const { gameBoard } = this.state;
    for (let col = 0; col < 3; col += 1) {
      let victory = true;
      for (let row = 0; row < 2; row += 1) {
        const index = col + ( row * 3);
        if (gameBoard[index] == 0 
          || gameBoard[index] !== gameBoard[index + 3]) {
          victory = false;
          break;
        }
      }
      if (victory) return true;
    }
    return false;
  }

  checkBoardDiagonals() {
    const { gameBoard } = this.state;

    let victory = true;

    for(let index = 0; index < 2; index += 1) {
      const indexA = index + (index * 3);
      // console.log(`Parte A: ${indexA}, ${indexA + 4}`)
      if ( gameBoard[indexA] === 0 || gameBoard[indexA] !== gameBoard[indexA + 4]) {
        // console.log(`${gameBoard[indexA]} !== ${gameBoard[indexA + 4]}`);
        victory = false;
        break;
      }
    }

    if (victory) return true;

    victory = true;

    for(let index = 0; index < 2; index += 1) {
      const indexA = (2 - index) + (index * 3);
      // console.log(`Parte B: ${indexA}, ${indexA + 2}`)
      if ( gameBoard[indexA] === 0 || gameBoard[indexA] !== gameBoard[indexA + 2]) {
        // console.log(`${gameBoard[indexA]} !== ${gameBoard[indexA + 2]}`);
        victory = false;
        break;
      }
    }

    return victory;
  }

  checkWinner() {
    if ( this.checkBoardColumns()
      || this.checkBoardRows()
      || this.checkBoardDiagonals() ) {
        const { activePlayer } = this.state;
        this.setState({ winner: activePlayer })
      } else {
        this.changeActivePlayer();
      }
  }

  // componentDidUpdate() {
  //   console.clear();
  //   console.log('Rows: ', this.checkBoardRows());
  //   console.log('Columns: ', this.checkBoardColumns());
  //   console.log('Diagonals: ', this.checkBoardDiagonals());
  //   console.log(this.state.gameBoard);
  // }

  renderGameOver() {
    const { activePlayer } = this.state;
    return (
      <div>
        <p>Fim de Jogo</p>
        <p>Jogador { activePlayer } venceu</p>
      </div>
    )
  }

  render() {
    const { gameBoard, winner } = this.state;
    return (
      <div>
        { !!winner 
          ? this.renderGameOver()
          : <GameBoard
            gameState={ gameBoard }
            handleSelectCell={ this.handleSelectCell }
          /> }
      </div>
    );
  }
}

export default TicTacToe;
