import React from 'react';
import styles from './Game.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    CurrentGamerSelector,
    drawSelector,
    squareSelector,
    winSelector,
} from '../../redux/selectors';
import {getWinner, newGame, walk} from '../../redux/actions';

const Game = ({square, currentGamer, walk, newGame, winner, getWinner, draw}) => {
    return (
        <div className={styles.root}>
            {winner || draw ?
                <div
                    className={styles.winStatus}
                    onClick={() => newGame()}
                    onChange={getWinner(winner)}>
                    <div>{winner ? `Winner: ${winner}` : draw}</div>
                    <div className={styles.again}>Click to game again</div>
                </div> : null}
            <div className={styles.square}>
                {square.map(item => {
                    return <span key={item.id}
                                 onClick={() => walk(item.id, item.value)}>{item.value}</span>
                })}
            </div>
            <div className={styles.props}>
                <div>
                    <button onClick={() => newGame()}>Start new game</button>
                </div>
                <div className={styles.gamer}>Current Gamer: <b>{currentGamer}</b></div>
            </div>
        </div>
    );
};

Game.propTypes = {
    square: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string,
    }).isRequired).isRequired,
    currentGamer: PropTypes.string.isRequired,
    walk: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
    winner: PropTypes.string,
    getWinner: PropTypes.func.isRequired,
    draw: PropTypes.string,
};

export default connect((state) => ({
    square: squareSelector(state),
    currentGamer: CurrentGamerSelector(state),
    winner: winSelector(state),
    draw: drawSelector(state),
}), {
    walk,
    newGame,
    getWinner,
})(Game);
