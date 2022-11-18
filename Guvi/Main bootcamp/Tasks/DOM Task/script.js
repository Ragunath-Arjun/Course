const box = colbox('div', 'box');
document.body.append(box);

const container = colbox('div', 'container');;
const row = colbox('div', 'row');
const col1 = colbox('div', 'col-12');
const col2 = colbox('div', 'col-12');
const col3 = colbox('div', 'col-12');
const col4 = colbox('div', 'col-12');

box.append(container);
container.append(row);
row.append(col1, col2, col3, col4);

const boxCenter1 = colbox('div', 'box-center text-center');
const boxCenter2 = colbox('div', 'box-center text-center');
const boxCenter3 = colbox('div', 'box-center text-center');
const boxCenter4 = colbox('div', 'box-center text-center');

const divelement1 = colbox('div', 'divelement');
divelement1.innerText = "This is a div element.";
const divelement2 = colbox('div', 'divelement');
divelement2.innerText = "This is a div element.";
const spanelement1 = colbox('span', 'spanelement');
spanelement1.innerText = "This is a span element.";
const spanelement2 = colbox('span', 'spanelement');
spanelement2.innerText = "This is a span element.";
boxCenter1.append(divelement1, spanelement1, divelement2, spanelement2);
col1.append(boxCenter1);
divelement1.addEventListener('mouseover', colorit, false);
divelement2.addEventListener('mouseover', colorit, false);
spanelement1.addEventListener('mouseover', colorit, false);
spanelement2.addEventListener('mouseover', colorit, false);

function colorit(e) {
    e.target.style.backgroundColor = "#333";
    e.target.style.color = "white";
}


const divText = colbox('div', 'text');
divText.innerText = "Click the button to open prompt!";
const button = colbox('button', 'btn btn-success');
button.setAttribute("onclick", "prompting()");
button.innerText = "Prompt!";
const divText2 = colbox('div', 'text');
const spantext = colbox('span', 'prompttext');
spantext.setAttribute('id', 'Prompttext');
divText2.append(spantext);
boxCenter2.append(divText, button, divText2);
col2.append(boxCenter2);

function prompting() {
    let str = prompt("Enter the text!");
    spantext.innerText = str;
    spantext.style.fontSize = "1.5rem";
    spantext.style.color = "white";
}



const h1 = colbox('h1', 'h1title');
h1.innerText = "This is a h1 tag";
h1.style.cursor = "crosshair";
const div1 = document.createElement('div');
const spanX = colbox('span', 'mouseX');
const spanY = colbox('span', 'mouseY');
div1.append(spanX, spanY);
boxCenter3.append(h1, div1);
col3.append(boxCenter3);

h1.addEventListener('mousemove', coordinates);
function coordinates(e) {
    spanX.innerText = `Screen X/Y = ${e.screenX} , ${e.screenY} \n`;
    spanY.innerText = `Client X/Y = ${e.pageX} , ${e.pageY}`;
}


const textarea = colbox('textarea', 'textarea');
textarea.setAttribute('id', 'textarea');
textarea.setAttribute('onkeyup', 'characterlength(this)');
textarea.setAttribute('cols', '50');
textarea.setAttribute('rows', '5');
const ccount = colbox('div', 'characterscount');
ccount.style.color = "white";
boxCenter4.append(textarea, ccount);
col4.append(boxCenter4);

function characterlength(val) {
    let clength = val.value.length;
    ccount.innerText = `The characters length is ${clength}`;
}


function colbox(element, classes) {
    let div = document.createElement(element);
    div.setAttribute('class', classes);
    return div;
}

