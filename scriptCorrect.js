const container = document.querySelector("#container");
const btn = document.querySelector("button");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
let squareCount = 16;
function createGrid(size) {
    const existingGrid = document.getElementById("grid");
    if (existingGrid) {
        existingGrid.remove();
    }
     const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    grid.style.setProperty('--grid-size', size);
    for (let i = 1; i <= (size * size); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        grid.appendChild(gridSquare);
        
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.classList.add("hover");
        });
        
        gridSquare.addEventListener("mouseleave", () => {
            setTimeout(() => {
                gridSquare.classList.remove("hover");
            }, 400);
        });
    }
    
    container.appendChild(grid);
}
createGrid(squareCount);

btn.addEventListener("click", () => {
    let newGrid;
    
    // Loop until valid input or cancel
    while (true) {
        newGrid = prompt("Choose a new grid number under 65");
        
        // If user cancels, break out of loop
        if (newGrid === null) {
            return;
        }
        
        // Convert to number
        newGrid = parseInt(newGrid);
        
        // Validate input
        if (isNaN(newGrid) || newGrid <= 0) {
            alert("Please enter a valid positive number");
            continue;
        }
        
        if (newGrid >= 65) {
            alert("Please enter a number less than 65");
            continue;
        }
        
        // Valid input - break out of loop
        break;
    }
    
    // Update global squareCount and create new grid
    squareCount = newGrid;
    createGrid(squareCount);
});