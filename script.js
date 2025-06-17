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

const gridContainer = document.querySelector(".grid-container");

const createGrid = function(dimension, container){
    for (let row = 0; row < dimension; row++){
        const gridRow = document.createElement("div")
        gridRow.classList.add("grid-row");
        for (let sqr = 0; sqr < dimension; sqr++){
            const gridSqr = document.createElement("div");
            gridSqr.classList.add("grid-square");
            gridRow.append(gridSqr);
        }
        container.append(gridRow);
    }
}

createGrid(10, gridContainer);