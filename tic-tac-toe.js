document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    const squares = document.querySelectorAll('#board .square');

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
