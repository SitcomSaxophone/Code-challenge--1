$(document).ready(readyNow);

let counter = 0;

function readyNow() {
    $('#generatorButton').on('click', generateDivElement);
    $('#swapButton').on('click', swapButtonClick);
    $('#deleteButton').on('click', deleteButtonClick);
} // end readyNow

function generateDivElement() {
    $('#generatedDiv').empty();
    counter += 1;
    $('#generatedDiv').append('<div class="newDiv"></div>'); // generate new div on button click
    $('.newDiv').append('<p>' + counter + '</p>'); // appends p element with total button clicks
    $('.newDiv').append(`
        <button id="swapButton">Swap</button>
        <button id="deleteButton">Delete</button>
    `);
} // end generateDivElement

function swapButtonClick() {
    if ($(this).parent().is('.newDiv')) {
        // upon button click swap div background from red to yellow
        $('div.newDiv').toggleClass('yellow');
    }

} // end swapButtonClick

function deleteButtonClick() {
    console.log('clicked');
    
    $('.newDiv').remove();
} // end deleteButtonClick