let getEmptyCells = (board)=> {
    const emptyCells = [];
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (board[i][j] == 0) {
                emptyCells.push({
                    row: i,
                    col: j
                });
            }
        }
    }

    return emptyCells;
};
let newEntry = (board) => {
      
    // getting empty cells
    let emptyCells = getEmptyCells(board); 
  
    // setting default value of new tile 
  
    // if cells are empty
    let newTile = -1
    if (emptyCells.length > 0) {
        newTile = Math.random() < 0.75 ? 2 : 4;
        const randomCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
        board[randomCell.row][randomCell.col] = newTile;
        return {newBoard: board, newTile: newTile};
    }
    // if cells are not empty
    return {newBoard: board, newTile: newTile};
};
  
export default newEntry; 
  
  