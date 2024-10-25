document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    const squares = document.querySelectorAll('#board .square');
    const status = document.getElementById('status');
    const newGameButton = document.getElementById('new-game');

    // Exercise 1 - Layout the board
    squares.forEach((square) => {
        square.classList.add('square');
    });

    // Exercise 2 - Add an X or O to a square when clicked
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Exercise 3 - Change the style when you move your mouse over a square
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });

    // Exercise 4 - Check for the winner and update the status
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        winningCombinations.forEach((combination) => {
            const [a, b, c] = combination;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                status.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                status.classList.add('you-won');
            }
        });
    }

    // Exercise 5 - Restart the game
    newGameButton.addEventListener('click', () => {
        squares.forEach((square) => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';
    });
});
