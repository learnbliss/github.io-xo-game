import {COUNT_WINNER_O, COUNT_WINNER_X, GET_WINNER, NEW_GAME, RESET_COUNTERS, WALK} from './constants';
import {drawSelector, winSelector} from './selectors';

export const walk = (id, value) => {
    return (dispatch) => {
        if (value === null) {
            dispatch({type: WALK, payload: {id, value}})
        }
    };
};

export const getWinner = (winner) => {
    return (dispatch, getState) => {
        const state = getState();
        if (winSelector(state)) {
            dispatch({type: GET_WINNER, payload: {winner}});
            if (winner === 'X') {
                dispatch({type: COUNT_WINNER_X, payload: {winner}});
            } else {
                dispatch({type: COUNT_WINNER_O, payload: {winner}});
            }
        }
        if (drawSelector(state) && !(winSelector(state))) {
            dispatch({type: GET_WINNER, payload: {winner: drawSelector(state)}})
        }
    }
};

export const newGame = () => ({
    type: NEW_GAME,
});

export const resetCounters = () => ({
    type: RESET_COUNTERS,
});
