const screen = document.querySelector('.screen');
let selectedColor = 'black';
let gridSize = 16;

function createGrids() {
  screen.innerHTML = ""; // remove previous grids
  const gridBoxSize = (100 / gridSize) + '%'; //creates each div to a % of the .screen div
  for (let i = 0; i < gridSize * gridSize; i++) {   //function to create a set of grids to fill the screen
    const gridBox = document.createElement('div');  //creates new div to be repeated in the function above
    gridBox.classList.add('grid-box');  //gives it a classlist of .grid-box
    screen.appendChild(gridBox);  //Changes .screen div to .grid-box div
    gridBox.style.width = gridBoxSize;  //takes the width/height from the constant gridBoxSize equation above
    gridBox.style.height = gridBoxSize;

    gridBox.addEventListener('mouseenter', (event) => { //when the mouse enters each gridBox div...
      event.target.style.backgroundColor = selectedColor; // the event is the result, which is then changes background color to the selectedColor variable above
    });
  }
}

createGrids();  //callback for the above function


const newGridButton = document.querySelector('.new-grid'); //link to the button .new-grid
newGridButton.addEventListener('click', () => {  //when we click on the button, the function here plays...
  gridSize = prompt("Enter grid size: ", gridSize); //prompt to enter your grid size. Changes the gridSize variable at the top to whatever we enter in the prompt
  gridSize = Math.min(gridSize, 100); // limit the grid size to 100
  createGrids(); //run the updated createGrids() function
});



const resetButton = document.querySelector('.reset'); // link to the button .reset
resetButton.addEventListener('click', () => {    //When we click the button, it...
  const gridBoxes = document.querySelectorAll('.grid-box'); //selects all divs called .grid-box
  gridBoxes.forEach(gridBox => {  //creates a var = gridBox and uses that to change the color of each box back to original
    gridBox.style.backgroundColor = 'blueviolet';
  });
});

const colorPicker = document.querySelector(".color-picker"); //selects the div .color-picker
colorPicker.addEventListener("input", function () {  //When the input is is selected. Arrow function won't work for some reason?
  selectedColor = this.value; //selectedColor variable of black is replaced with this.value
});

