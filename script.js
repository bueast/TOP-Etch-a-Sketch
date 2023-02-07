const screen = document.querySelector('.screen');
    for (let i = 0; i < 256; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      screen.appendChild(gridBox);}