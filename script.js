// Etch a sketch pseudocode

/*

Goal: 
    1. Create (or recreate) a grid of squares (max size: 100x100)
    2. Allow user to colour squares by hovering
    3. Clear grid

function createGrid (gridSize):
    create container div
    for i 0 to gridSize:
        create square div
        add classname = i
        add eventListener:
            change class of hovered square to active to change colour
        add square div to container div

*/

const createGrid = function(dimension){
    const gridContainer = document.querySelector(".grid-container");
    for (let row = 0; row < dimension; row++){
        const gridRow = document.createElement("div")
        gridRow.classList.add("grid-row");
        for (let sqr = 0; sqr < dimension; sqr++){
            const gridSqr = document.createElement("div");
            gridSqr.classList.add("grid-square");
            gridSqr.addEventListener("mouseover", e => {
                e.target.classList.add("grid-active");
            })
            gridRow.append(gridSqr);
        }
        gridContainer.append(gridRow);
    }
}

const removeGrid = function(){
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
}

const clearGridButton = document.querySelector(".clear-btn");

clearGridButton.addEventListener("click", e => {
    const dimension = document.querySelectorAll(".grid-row").length;
    removeGrid();
    createGrid(dimension);    
})

const dimensionInput = document.querySelector("#grid-dim");
dimensionInput.addEventListener("input", e => {
    removeGrid()
    const dimension = e.target.valueAsNumber
    createGrid(dimension);
})

createGrid(5);