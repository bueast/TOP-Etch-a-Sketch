const screen = document.querySelector('.screen');

for (let i = 0; i < 256; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      screen.appendChild(gridBox);

      gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black';
      });
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
      const gridBoxes = document.querySelectorAll('.grid-box');
      gridBoxes.forEach(gridBox => {
            gridBox.style.backgroundColor = 'blueviolet';
      });
});

document.body.appendChild(resetButton);





