// Setup:
// When inside the project folder in your terminal
// - Mac
//   brew install yarn
//   yarn install
// - Ubuntu
//   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
//   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
//   sudo apt-get update && sudo apt-get install yarn
//
// run in terminal to start server:
// - webpack-dev-server
// run in terminal to execute linter ( check styles )
// - eslint ./lib
//
// Todo
// When clicking on the hint button we should see a hint being displayed.

function checkIfPlayerWins() {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => { return parseInt(e.innerHTML) })
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!")
  }
}


// 1. Select all tiles
// 2. For each tile
// 3. Listen to the click event
// 4. If it has an empty neighbor
// 5. Swap the tile and the empty space
// 6. Check if player wins


function moveTile(tile) {
  // 1. Select empty tile
  // 2. Replace its content with the `element`'s content
  // 3. Empty `element`'s content
  // 4. Add empty class to element
}

function canMove(tile) {
  // 1. Lets get the location of the tile
  // 2. Lets get the location the empty tile
  // 3. Check if there is an empty tile next to the clicked tile.
}
