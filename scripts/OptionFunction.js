// Getting all boxes inside boxesContainer.
const boxes = document.querySelectorAll("#boxesContainer .box");

// Converting the above boxes node list into an array.
const arrayOfBoxes = Array.from(boxes);

/*
    Initializing dragDropShape to null.
    It will keep track of the shape of the option which is being dragged to apply the respective dragDropOptionObj method.
*/
let dragDropShape = null;

// This variable wiil keep track of color of the option that is being dragged.
let color = null;

/*
    This function returns the array of row and column for the given box.
*/
const getRowAndColumn = (box) => {
    // Getting the index of box.
    const index = arrayOfBoxes.indexOf(box);

    // Calculating row and column.
    const row = Math.floor(index / 11) + 1;
    const column = (index % 11) + 1;

    // Returning array of row and column.
    return [row, column];
};

// This function add dragover class to each box passed in the array as argument to it.
const addDragoverClass = (boxesArray) => {
    boxesArray.forEach(box => {
        box.classList.add('dragover');
    });
}

/*
    This function returns true if the option can be placed in the boxes container. Else it returns false.
*/
const optionCanBePlacedHLSeries = (box, counterIndex) => {
    let canOptionBePlaced = true;

    const rowAndColumn = getRowAndColumn(box);

    // Getting column of the box in zero-based index.
    const column = rowAndColumn[1] - 1;

    // If column-1 is greater than counterIndex, it means that the option can't be placed in the boxes. Return from the function.
    if (column > counterIndex) {
        canOptionBePlaced = false;
    };
    
    return canOptionBePlaced;
}

/*
    This object consists of several methods.
    Each method highlights the boxes in boxesContainer based on the option which is being dragged by the user.
 */
const dragDropOptionObj = {
    vL2: (dragoverBox) => {
        const box1 = dragoverBox;
        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2) {
            addDragoverClass([box1, box2]);
        };
    },

    vL3: (dragoverBox) => {
        const box1 = dragoverBox;
        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 11];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3) {
            addDragoverClass([box1, box2, box3]);
        };
    },

    vL4: (dragoverBox) => {
        const box1 = dragoverBox;
        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 11];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 11];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4) {
            addDragoverClass([box1, box2, box3, box4]);
        };
    },

    vL5: (dragoverBox) => {
        const box1 = dragoverBox;

        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 11];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 11];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 11];
        const box5 = boxes[arrayOfBoxes.indexOf(box4) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4 && box5) {
            addDragoverClass([box1, box2, box3, box4, box5]);
        }
    },

    vL6: (dragoverBox) => {
        const box1 = dragoverBox;
        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 11];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 11];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 11];
        const box5 = boxes[arrayOfBoxes.indexOf(box4) + 11];
        const box6 = boxes[arrayOfBoxes.indexOf(box5) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4 && box5 && box6) {
            addDragoverClass([box1, box2, box3, box4, box5, box6]);
        }
    },

    hL2: (dragoverBox) => {
        const box1 = dragoverBox;

        // If option can't be placed then return nothing.
        if (!optionCanBePlacedHLSeries(box1, 9)) {
            return;
        };

        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 1];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2) {
            addDragoverClass([box1, box2]);
        };
    },

    hL3: (dragoverBox) => {
        const box1 = dragoverBox;

        // If option can't be placed then return nothing.
        if (!optionCanBePlacedHLSeries(box1, 8)) {
            return;
        };

        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 1];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 1];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3) {
            addDragoverClass([box1, box2, box3]);
        };
    },

    hL4: (dragoverBox) => {
        const box1 = dragoverBox;

        // If option can't be placed then return nothing.
        if (!optionCanBePlacedHLSeries(box1, 7)) {
            return;
        };

        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 1];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 1];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 1];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4) {
            addDragoverClass([box1, box2, box3, box4]);
        };
    },

    hL5: (dragoverBox) => {
        const box1 = dragoverBox;

        // If option can't be placed then return nothing.
        if (!optionCanBePlacedHLSeries(box1, 6)) {
            return;
        };
        
        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 1];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 1];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 1];
        const box5 = boxes[arrayOfBoxes.indexOf(box4) + 1];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4 && box5) {
            addDragoverClass([box1, box2, box3, box4, box5]);
        }
    },

    hL6: (dragoverBox) => {
        const box1 = dragoverBox;

        // If option can't be placed then return nothing.
        if (!optionCanBePlacedHLSeries(box1, 5)) {
            return;
        };

        const box2 = boxes[arrayOfBoxes.indexOf(box1) + 1];
        const box3 = boxes[arrayOfBoxes.indexOf(box2) + 1];
        const box4 = boxes[arrayOfBoxes.indexOf(box3) + 1];
        const box5 = boxes[arrayOfBoxes.indexOf(box4) + 1];
        const box6 = boxes[arrayOfBoxes.indexOf(box5) + 1];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2 && box3 && box4 && box5 && box6) {
            addDragoverClass([box1, box2, box3, box4, box5, box6]);
        }
    },

}

const dragover = (e) => {
    e.preventDefault();
    if (!dragDropShape) {
        return;
    }

    dragDropOptionObj[dragDropShape](e.target);
    // console.log("hover");
}

boxes.forEach(box => box.addEventListener("dragover", dragover));

boxes.forEach(box => box.addEventListener("dragleave", () => {
    boxes.forEach(box => box.classList.remove("dragover"))
}))

boxes.forEach(box => box.addEventListener("drop", () => {
    
    // Filter all the boxes which have dragover class.
    const highlightedBoxes = Array.from(boxes).filter((box) => box.classList.contains('dragover'));

    if (highlightedBoxes.length === 0) {
        return;
    }

    // Add the backgroundColor to the highlighted boxes.
    highlightedBoxes.forEach(box => {
        box.style.backgroundColor = color;
        box.classList.add("filled");
    })

    // Set color to null.
    color = null;
}));

// This function handles the dragend event of options.
const optionDragStop = (option) => {

    // If color is null, then remove the option. Else Display the option.
    if (color === null) {
        option.remove();
    } else {
        option.classList.remove("activeOption");
        option.classList.remove("hide");
    }
}

/*
    This function handles the dragstart event of option.
    It increase the height and width of the box by adding activeOption class.
    Hides the option box while dragging.
*/
const optionDragStart = (option) => {
    color = window.getComputedStyle(option.querySelector('.box')).backgroundColor;

    option.classList.add("activeOption");

    // Remove the element from optionContainer.
    setTimeout(() => {
        option.classList.add("hide");
    }, 0);
}

const vL2Option = (option) => {
    dragDropShape = "vL2";
    optionDragStart(option);
}

const vL3Option = (option) => {
    dragDropShape = "vL3";
    optionDragStart(option);
}

const vL4Option = (option) => {
    dragDropShape = "vL4";
    optionDragStart(option);
}

const vL5Option = (option) => {
    dragDropShape = "vL5";
    optionDragStart(option);
}

const vL6Option = (option) => {
    dragDropShape = "vL6";
    optionDragStart(option);
}


const hL2Option = (option) => {
    dragDropShape = "hL2";
    optionDragStart(option);
}

const hL3Option = (option) => {
    dragDropShape = "hL3";
    optionDragStart(option);
}

const hL4Option = (option) => {
    dragDropShape = "hL4";
    optionDragStart(option);
}

const hL5Option = (option) => {
    dragDropShape = "hL5";
    optionDragStart(option);
}

const hL6Option = (option) => {
    dragDropShape = "hL6";
    optionDragStart(option);
}

