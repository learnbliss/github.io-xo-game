import {COUNT_WINNER_O, COUNT_WINNER_X, GET_WINNER, NEW_GAME, RESET_COUNTERS, WALK} from '../constants';

const initialState = {
    square: [
        {id: 0, value: null}, {id: 1, value: null}, {id: 2, value: null},
        {id: 3, value: null}, {id: 4, value: null}, {id: 5, value: null},
        {id: 6, value: null}, {id: 7, value: null}, {id: 8, value: null},
    ],
    currentGamer: 'X',
    winStatus: null,
    counterX: 0,
    counterO: 0,
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case WALK:
            return {
                ...state,
                square: state.square.map(item => {
                    if (item.id === payload.id) {
                        return {
                            id: item.id,
                            value: state.currentGamer
                        }
                    }
                    return item
                }),
                currentGamer: state.currentGamer === 'X' ? 'O' : 'X'
            };
        case NEW_GAME:
            return {
                ...state,
                square: initialState.square,
                currentGamer: 'X',
                winStatus: null,
            };
        case GET_WINNER:
            return {
                ...state,
                winStatus: payload.winner || 'Draw'
            };
        case COUNT_WINNER_X:
            return {
                ...state,
                counterX: state.counterX + 1,
            };
        case COUNT_WINNER_O:
            return {
                ...state,
                counterO: state.counterO + 1,
            };
        case RESET_COUNTERS:
            return {
                ...state,
                counterX: 0,
                counterO: 0,
            };
        default:
            return state
    }
}
