createGrid(16, 16);

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
