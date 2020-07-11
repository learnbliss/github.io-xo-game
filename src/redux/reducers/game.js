import {NEW_GAME, WALK} from '../constants';

const initialState = {
    square: {
        1: {value: null}, 2: {value: null}, 3: {value: null},
        4: {value: null}, 5: {value: null}, 6: {value: null},
        7: {value: null}, 8: {value: null}, 9: {value: null},
    },
    currentGamer: 'X',
};

const clearValue = (obj) => {
    Object.values(obj).map(item => item.value = null)
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case WALK:
            return {
                ...state,
                square: {
                    ...state.square,
                    [payload.id]: {...state.square[payload.id].value, value: state.currentGamer}
                },
                currentGamer: state.currentGamer === 'X'? 'O' : 'X'
            };
        case NEW_GAME:
            return {
                ...state,
                square: Object.values(state.square).map(item => item.value = null)
            };
        default:
            return state
    }
}
