import {NEW_GAME, WALK} from './constants';

export const walk = (id) => ({
    type: WALK,
    payload: {
        id
    }
});

export const newGame = () => ({
    type: NEW_GAME,
})
