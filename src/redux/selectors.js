import {createSelector} from 'reselect'

export const squareSelector = (state) => state.game.square;
export const CurrentGamerSelector = (state) => state.game.currentGamer;

export const squareToArrSelector = createSelector(
    squareSelector,
    (square) => {
        return Object.keys(square)
    }
);
