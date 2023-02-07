const screen = document.querySelector('.screen');
let selectedColor = 'black';

for (let i = 0; i < 256; i++) {
  const gridBox = document.createElement('div');
  gridBox.classList.add('grid-box');
  screen.appendChild(gridBox);

  gridBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = selectedColor;
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

const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("input", function() {
  selectedColor = this.value;
});
