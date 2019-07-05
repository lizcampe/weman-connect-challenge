export const ROWS = 10;
export const COLUMNS = 20;
export const mines = Array.from(Array(ROWS)).map(y => Array.from(Array(COLUMNS)).map(x => 0));


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

Array.from(Array(7)).forEach(() => {
    while (true) {
        let row = getRandomInt(ROWS - 1);
        let column = getRandomInt(COLUMNS - 1);

        if (mines[row][column] === 0) {
            (mines[0][1] = 1);
            (mines[2][15] = 2);
            (mines[3][14] = 3);
            (mines[5][13] = 4);
            (mines[5][16] = 5);
            (mines[5][8] = 6);
            (mines[5][14] = 7);
            break;
        }
    }
});

export const board = {
    mines,
    current: {
        row: 0,
        column: 0,
    },
    ROWS,
    COLUMNS,
};
