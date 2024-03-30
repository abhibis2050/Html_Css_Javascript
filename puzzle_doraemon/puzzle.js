let rows = 3;
let columns = 3;

let currentTile;
let otherTile;

const shuffle=function(arr){
    for (let i=arr.length-1;i > 0; i--){
    const temp = arr[i]
    const j = Math.floor(Math.random() *(arr.length-1))
    arr[i]=arr[j]
    arr[j]=temp
  }
  }

// const imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];


let turns = 0;
window.onload = () => {
    shuffle(imgOrder)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = imgOrder.shift() + ".jpg";
      // console.log(tile);

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart); //click an image to drag
      tile.addEventListener("dragover", dragOver); //moving image around while clicked
      tile.addEventListener("dragenter", dragEnter); //dragging image onto another one
      tile.addEventListener("dragleave", dragLeave); //dragged image leaving anohter image
      tile.addEventListener("drop", dragDrop); //drag an image over another image, drop the image
      tile.addEventListener("dragend", dragEnd); //after drag drop, swap the two tiles

      document.getElementById("board").append(tile);
    }
  }
};

function dragStart() {
  currentTile = this; //this refers to the img tile being dragged
  console.log("Current Tile", currentTile);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this; //this refers to the img tile being dropped on
  console.log("Other Tile", otherTile);
}

function dragEnd() {
  if (!otherTile.src.includes("3.jpg")) {
    return;
  }

  let currCoods = currentTile.id.split("-");

  let r = parseInt(currCoods[0]);
  let c = parseInt(currCoods[1]);
  // console.log(currCoods);

  let otherCoods = otherTile.id.split("-");
  let r1 = parseInt(otherCoods[0]);
  let c1 = parseInt(otherCoods[1]);

  // console.log(otherCoods);

  // coordinates adjascent to current coordinates
  const adjleft = r == r1 && c1 == c - 1;
  const adjRight = r == r1 && c1 == c + 1;
  const adjtop = r1 == r - 1 && c1 == c;
  const adjbottom = r1 == r + 1 && c1 == c;

  console.log(adjleft, adjRight, adjtop, adjbottom);

  const adjacentCoordinate = adjleft || adjRight || adjtop || adjbottom;

  if (adjacentCoordinate) {
    let currentImage = currentTile.src;
    let OtherImage = otherTile.src;

    otherTile.src = currentImage;
    currentTile.src = OtherImage;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
}
