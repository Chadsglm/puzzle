function checkIfPlayerWins() {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => { return parseInt(e.innerHTML) })
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!")
  }
}

const moveTile = (tile) => {
  // 1. Select empty tile
  const empty = document.querySelector('.empty');
  // 2. Replace its content with the `element`'s content
  empty.innerText = tile.innerText;
  // 2a. Remove the empty class
  empty.classList.remove('empty');
  // 3. Empty `element`'s content
  tile.innerText = '';
  // 4. Add empty class to element
  tile.classList.add('empty');
};

const canMove = (tile) => {
  // 1. Lets get the location of the tile
  const xActive = tile.cellIndex;
  const yActive = tile.parentElement.rowIndex;
  // 2. Lets get the location the empty tile
  const empty = document.querySelector('.empty');
  const xEmpty = empty.cellIndex;
  const yEmpty = empty.parentElement.rowIndex;
  // 3. Check if there is an empty tile next to the clicked tile.  Any direction
  // If, else if loop to check
  // Is the ...
  let able = false;

  //bottom empty
  if ((xActive === xEmpty) && (yActive + 1 === yEmpty)) {
    able = true;
  //top empty
  } else if ((xActive === xEmpty) && (yActive - 1 === yEmpty)) {
    able = true;
    //left empty
  } else if ((yActive === yEmpty) && (xActive - 1 === xEmpty)) {
    able = true;
    //right empty
  } else if ((yActive === yEmpty) && (xActive + 1 === xEmpty)) {
    able = true;
  };

  // Make sure to return the conditional
  return able;
  };


const playWithMouse = () => {
  // 1. Select all tiles
  const tiles = document.querySelectorAll("td");
  // 2. For each tile
  tiles.forEach((tile) => {
    // Add an event listener
    tile.addEventListener('click', (event) => {
      // Check if the tile can move
      const move = canMove(tile);
      // if it can move...
      if (move) {
        // move the tile
        moveTile(tile);
      }
      // Check if the player wins after any move
      checkIfPlayerWins();
    });
  });
};

playWithMouse();
