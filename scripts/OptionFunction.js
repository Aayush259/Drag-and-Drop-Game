// Getting all boxes inside boxesContainer.
const boxes = document.querySelectorAll("#boxesContainer .box");

/*
    Initializing dragDropShape to null.
    It will keep track of the shape of the option which is being dragged to apply the respective dragDropOptionObj method.
*/
let dragDropShape = null;

// This function add dragover class to each box passed in the array as argument to it.
const addDragoverClass = (boxesArray) => {
    boxesArray.forEach(box => {
        box.classList.add('dragover');
    });
}

/*
    This object consists of several methods.
    Each method highlights the boxes in boxesContainer based on the option which is being dragged by the user.
 */
const dragDropOptionObj = {
    vL2: (dragoverBox) => {
        const box1 = dragoverBox;
        const box2 = boxes[Array.from(boxes).indexOf(dragoverBox) + 11];

        // If all boxes are valid elements, then highlight the boxes.
        if (box1 && box2) {
            addDragoverClass([box1, box2]);
        };
    },
}

const dragover = (e) => {
    e.preventDefault();
    if (!dragDropShape) {
        return;
    }

    dragDropOptionObj[dragDropShape](e.target);
    console.log("hover");
}

boxes.forEach(box => box.addEventListener("dragover", dragover));

boxes.forEach(box => box.addEventListener("dragleave", () => {
    boxes.forEach(box => box.classList.remove("dragover"))
}))

const vL2Option = () => {
    dragDropShape = "vL2";
}

const vL3Option = () => {
    dragDropShape = "vL3";
}