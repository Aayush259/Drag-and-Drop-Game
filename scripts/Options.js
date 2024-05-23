const vL2 = `
    <div class="option" id="vL2">
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vL3 = `
    <div class="option" id="vL3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vL4 = `
    <div class="option" id="vL4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vL5 = `
    <div class="option" id="vL5">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vL6 = `
    <div class="option" id="vL6">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hL2 = `
    <div class="option flex" id="hL2">
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hL3 = `
    <div class="option flex" id="hL3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hL4 = `
    <div class="option flex" id="hL4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;



const hL5 = `
    <div class="option flex" id="hL5">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hL6 = `
    <div class="option flex" id="hL6">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const d = `
    <div class="option" id="d">
        <div class="box"></div>
    </div>
`;

const hLS3 = `
    <div class="option" id="hLS3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hLS4 = `
    <div class="option" id="hLS4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hrLS3 = `
    <div class="option" id="hrLS3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hrLS4 = `
    <div class="option" id="hrLS4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vLS3 = `
    <div class="option" id="vLS3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vLS4 = `
    <div class="option" id="vLS4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vrLS3 = `
    <div class="option" id="vrLS3">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vrLS4 = `
    <div class="option" id="vrLS4">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hT = `
    <div class="option" id="hT">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const hrT = `
    <div class="option" id="hrT">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vT = `
    <div class="option" id="vT">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;

const vrT = `
    <div class="option" id="vrT">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
`;


const options = {
    hL2: hL2,
    hL3: hL3,
    hL4: hL4,
    hL5: hL5,
    hL6: hL6,
    vL2: vL2,
    vL3: vL3,
    vL4: vL4,
    vL5: vL5,
    vL6: vL6,
    d:d,
    hLS3: hLS3,
    hLS4: hLS4,
    hrLS3: hrLS3,
    hrLS4: hrLS4,
    vLS3: vLS3,
    vLS4: vLS4,
    vrLS3: vrLS3,
    vrLS4: vrLS4,
    hT: hT,
    hrT: hrT,
    vT: vT,
    vrT: vrT,
}

function getOption(name) {
    return options[name];
}

export default getOption;