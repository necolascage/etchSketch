const container = document.querySelector("#container");
const btn = document.querySelector("button");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
let squareCount = 16;
function createGrid(size){
    const existingGrid = document.getElementById("grid");
    if (existingGrid){
        existingGrid.remove();
    }
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    grid.style.setProperty('--grid-size', size );

    for (let i = 1; i <= (size * size); i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        grid.appendChild(gridSquare);
        gridSquare.addEventListener("mouseenter" ,() => {
        gridSquare.classList.add("hover");
    })
    function removeHover(){
        gridSquare.classList.remove("hover");
    }
    function gridDelay(){
        setTimeout(removeHover, 400);
    }
    gridSquare.addEventListener("mouseleave" , gridDelay);
}
container.appendChild(grid);
}

createGrid(squareCount);


btn.addEventListener("click" , () =>{
    let newGrid;
    while (true){
        newGrid = prompt("Choose a new grid number under 65");
        if (newGrid === null){
            return;
        }
        newGrid = parseInt(newGrid);
        if (isNaN(newGrid) || newGrid <= 0){
            alert ("Please enter a valid positive number");
            continue;
        }

        if (newGrid >= 65){
            alert ("Please input a number smaller than 65");
            continue;
        }
        break
    }

    squareCount = newGrid;
    createGrid(squareCount);


})