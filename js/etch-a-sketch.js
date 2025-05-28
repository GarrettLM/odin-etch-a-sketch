createGrid(16, 16);

let resizeBtn = document.querySelector(".resize-button");
if (resizeBtn !== null) {
  resizeBtn.addEventListener("click", resizeEtchASketch);
} else {
  alert("Resize button null!");
}

function createGrid(numberOfRows, numberOfColumns) {
  let etchASketchView = document.querySelector(".etch-a-sketch-display");
  for (let i = 0; i < numberOfRows; i++) {
    let etchASketchRow = document.createElement("div");
    etchASketchRow.classList.add("etch-a-sketch-row");
    for (let j = 0; j < numberOfColumns; j++) {
      console.log(`${i}, ${j}`);
      let etchASketchTile = document.createElement("div");
      etchASketchTile.classList.add("etch-a-sketch-tile");
      etchASketchTile.addEventListener("mouseover", (e) => { e.target.classList.add("colored-tile")});
      etchASketchRow.appendChild(etchASketchTile);
    }
    etchASketchView.appendChild(etchASketchRow);
  }
}

function clearGrid() {
  let etchASketchRows = document.querySelectorAll(".etch-a-sketch-row");
  etchASketchRows.forEach((etchASketchRow) => {
    etchASketchRow.remove();
  });
}

function resizeEtchASketch() {
  let numOfRowsAndCols = promptForNumOfRowsAndCols();
  clearGrid();
  createGrid(numOfRowsAndCols, numOfRowsAndCols);
}

function isValidGridNumber(number) {
  if (Number.isNaN(number) || (number < 1) || (number > 100)) {
    return false;
  }
  return true;
}

function promptForNumOfRowsAndCols() {
  let numOfRowsAndCols;
  do {
    numOfRowsAndCols = parseInt(prompt("Enter the number of rows and columns"));
  } while (!isValidGridNumber(numOfRowsAndCols));

return numOfRowsAndCols;
}
