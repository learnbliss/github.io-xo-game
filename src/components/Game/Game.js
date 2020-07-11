import React from 'react';
import styles from './Game.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CurrentGamerSelector, squareSelector, squareToArrSelector} from '../../redux/selectors';
import {newGame, walk} from '../../redux/actions';

const Game = ({square, squareToArr, currentGamer, walk, newGame}) => {
    return (
        <div className={styles.root}>
            <div className={styles.square}>
                {squareToArr.map(item => {
                    return <span key={item}
                                 onClick={() => walk(item)}>{square[item].value}</span>
                })}
            </div>
            <div className={styles.props}>
                <div><button onClick={() => newGame()}>Start new game</button></div>
                <div className={styles.gamer}>Current Gamer: <b>{currentGamer}</b></div>
            </div>
        </div>
    );
};

Game.propTypes = {};

export default connect((state) => ({
    square: squareSelector(state),
    squareToArr: squareToArrSelector(state),
    currentGamer: CurrentGamerSelector(state),
}), {
    walk,
    newGame,
})(Game);
