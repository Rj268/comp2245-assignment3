document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    let gameActive = true; // Ensures the game only plays if active
    const squares = document.querySelectorAll('#board div'); // Select all squares
    const status = document.getElementById('status');
    const newGameButton = document.querySelector('.btn'); // Select the button properly

    // Exercise 1 - Layout the board
    squares.forEach((square) => {
        square.classList.add('square');
    });

    // Exercise 2 - Add an X or O to a square when clicked
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (gameActive && square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (checkWinner()) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameActive = false; // Stop the game after a win
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    // Exercise 3 - Change the style when you move your mouse over a square
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (gameActive && square.textContent === '') {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });

    // Exercise 4 - Check for the winner and update the status
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some((combination) => {
            const [a, b, c] = combination;
            return (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            );
        });
    }

    // Exercise 5 - Restart the game
    newGameButton.addEventListener('click', () => {
        squares.forEach((square) => {
            square.textContent = ''; // Clear all squares
            square.classList.remove('X', 'O');
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';
        gameActive = true; // Reactivate the game
    });
});
