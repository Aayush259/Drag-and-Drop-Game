import getOption from "./Options.js";

// Getting optionContainer.
const optionContainer = document.getElementById("optionContainer");

// Creating option arrays to divide them into different categories.
const optionArray1 = ["hY", "hrY", "vY", "vrY", "B4"];
const optionArray2 = ["hB6", "vB6"];
const optionArray3 = ["hL2", "hL3", "hL5", "vL2", "vL3", "vL5"];
const optionArray4 = ["hL4", "hL6", "vL4", "vL6"];
const optionArray5 = ["d", "P5"];
const optionArray6 = ["hLS3", "hLS4", "vrLS3", "vrLS4", "hrLS3", "hrLS4", "vLS3", "vLS4"];
const optionArray7 = ["hT", "hrT", "hLT", "hrLT"];
const optionArray8 = ["vT", "vrT", "vrLT", "vLT"];
const optionArray9 = ["hZ4", "hZ5", "hrZ4", "hrZ5", "vZ4", "vZ5", "vrZ4", "vrZ5"];
const optionArray10 = ["hLL", "hrLL", "vrLL", "vLL", "vU", "vrU", "hrU", "hU"];

const colors = ["orange", "rgb(255, 0, 179)", "yellow", "aqua", "red", "greenyellow", "rgb(174, 0, 255)"];

// Creatingarray of option arrays to randomly select any three of them.
const arrayOfOptionArrays = [
    optionArray1, optionArray2, optionArray3, optionArray4, optionArray5, optionArray6, optionArray7, optionArray8, optionArray9, optionArray10
];

/*
    This function returns an object with three randomly selected arrays fromarrayOfOptionArrays.
*/
const getRandomArrays = () => {

    return {
        randomArray1: arrayOfOptionArrays[Math.floor(Math.random() * arrayOfOptionArrays.length)],
        randomArray2: arrayOfOptionArrays[Math.floor(Math.random() * arrayOfOptionArrays.length)],
        randomArray3: arrayOfOptionArrays[Math.floor(Math.random() * arrayOfOptionArrays.length)]
    };
}

// Object of three randomArrays.
const randomArrays = getRandomArrays();

/*
    This function appends the option in optionContainer by randomly selecting one random option from each array.
*/
const get3RandomOptions = (randomArraysObject) => {
    // Removing all options from optionContainer.
    optionContainer.innerHTML = ``;

    // This array will handle all the three options which will be added in optionContainer.
    const randomOptions = [];

    // Getting random option from each array and pushing it to randomOptions array.
    for (let array in randomArraysObject){
        // Generating random index.
        const randomIndex = Math.floor(Math.random() * randomArraysObject[array].length);

        // Getting option from the array using the randomIndex.
        const option = randomArraysObject[array][randomIndex];

        // Pushing the option into randomOptions array.
        randomOptions.push(option);
    }

    // Adding each option to the optionContainer.
    randomOptions.forEach(option => {
        optionContainer.innerHTML += getOption(option);

    });

    // Getting all elements of optionContainer.
    const options = optionContainer.querySelectorAll(".option");

    // Applying random colors for each option's boxes.
    for (let i = 0; i < 3; i++){
        // Random Color.
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        // Applying random color.
        options[i].querySelectorAll(".box").forEach(box => box.style.backgroundColor = randomColor);
    };
}

get3RandomOptions(randomArrays);