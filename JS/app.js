const main = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
const clear = document.querySelector('.clear');

let rowInput = prompt("The number of rows(must be less than of equal to 100): ");
let colInput = prompt("The number of columns(must be less than of equal to 100): ")
let limitOfInputs = 100;


/* Helper Function: changes the background color */
let changeBackgroundColor = (item) => {
    item.style.backgroundColor = "black";
}

/* Based on the height and width of the sides adjust the padding */
let adjustPadding = (item) => {
    if(rowInput == 100 && colInput == 100){
        item.style.padding = "4px";
    }else if((rowInput <= 99 && rowInput >= 64) 
        && (colInput <= 99 && colInput >= 64)){
            item.style.padding ="3px";
    }else if((rowInput <= 63 && rowInput >= 50) 
    && (colInput <= 63 && colInput >= 50)){
        item.style.padding = "5px";
    }else if((rowInput <= 49 && rowInput >= 20) 
    && (colInput <= 49 && colInput >= 20)){
        item.style.padding = "8px";
    }else{
        item.style.padding = "10px";
    }
}

for(let row = 0; row < rowInput; row++) {
    const row = document.createElement('div');
    row.classList.add('.row');
    for(let col = 0; col < colInput; col++){
        const pixel = document.createElement('div');
        pixel.classList.add('grid-box');
        pixel.classList.add('hover');
        pixel.textContent = " ";
        pixel.style.border = "0.5px solid #f5f5dc";
        adjustPadding(pixel);
        pixel.style.backgroundColor = "#f0f8ff";
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




