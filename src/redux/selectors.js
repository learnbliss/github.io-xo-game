import {createSelector} from 'reselect'

export const squareSelector = (state) => state.game.square;
export const CurrentGamerSelector = (state) => state.game.currentGamer;

const winnerCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

export const winSelector = createSelector(
    squareSelector,
    (square) => {
        let winner = null;
        winnerCombination.forEach(item => {
            const [a, b, c] = item;
            if (square[a].value === square[b].value && square[b].value === square[c].value && square[c].value !== null) {
                winner = square[c].value;
            }
        });
        return winner;
    }
);

export const counterXSelector = (state) => state.game.counterX;
export const counterOSelector = (state) => state.game.counterO;

export const drawSelector = createSelector(
    squareSelector,
    (square) => {
        let arr = square.filter(item => {
            return item.value !== null
        });
        if (arr.length === 9) {
            return 'Draw'
        }
        return null
    }
);

/*
0,4,8 // 0 + 4 + 4
0,1,2 // 0 + 1 + 1
0,3,6 // 0 + 3 + 3

2,4,6 // 2 + 2 + 2
2,1,0 // 0 + 1 + 1
2,5,8 // 2 + 3 + 3

6,3,0 // 0 + 3 + 3
6,7,8 // 6 + 1 + 1
6,4,2 // 2 + 2 + 2

8,4,0 // 0 + 4 + 4
8,5,2 // 2 + 3 + 3
8,7,6 // 6 + 1 + 1

3,4,5 // 3 + 1 + 1
5,4,3 // 3 + 1 + 1
1,4,7 // 1 + 3 + 3
7,1,4 // 1 + 3 + 3
5,4,3 // 3 + 1 + 1

------ sort

0,1,2 // 0 + 1 + 1
0,4,8 // 0 + 4 + 4
0,3,6 // 0 + 3 + 3
1,4,7 // 1 + 3 + 3
2,4,6 // 2 + 2 + 2
2,5,8 // 2 + 3 + 3
3,4,5 // 3 + 1 + 1
6,7,8 // 6 + 1 + 1
 */
