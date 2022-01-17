const main = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
const clear = document.querySelector('.clear');

// let rowInput = prompt("The number of rows: ");
// let colInput = prompt("The number of columns: ")
let limitOfInputs = 100;
let rowInput = 64;
let colInput = 64;

/* Helper Function: changes the background color */
let changeBackgroundColor = (item) => {
    item.style.backgroundColor = "red";
}

let adjustPadding = (item) = {
    
}

for(let row = 0; row < rowInput; row++) {
    const row = document.createElement('div');
    row.classList.add('.row');
    for(let col = 0; col < colInput; col++){
        const pixel = document.createElement('div');
        pixel.classList.add('grid-box');
        pixel.classList.add('hover');
        pixel.textContent = " ";
        pixel.style.border = "1px solid black";
        if(rowInput <= 16 && colInput <= 16){
            pixel.style.padding = "10px";
        }else if(rowInput <= 20 && colInput <= 20){
            pixel.style.padding = "5px";
        }else if(rowInput <= 64 && colInput <= 64){
            pixel.style.padding = "3px";
        }
        pixel.style.backgroundColor = "white";
        pixel.addEventListener('mouseover',  () => {
            // pixel.style.backgroundColor = "red";
            changeBackgroundColor(pixel);
        });
        row.appendChild(pixel);
    }
    gridContainer.appendChild(row);
}

/* Clicking the "Clear" button clear the entire board */
clear.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(item => {
        item.style.backgroundColor = "white";
    });
})




