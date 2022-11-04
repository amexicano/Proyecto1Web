let params = (new URL(document.location)).searchParams;
let A = parseInt(params.get('a'));
let B = parseInt(params.get('b'));
let C = parseInt(params.get('c'));
let D = parseInt(params.get('d'));
let values = [A, B, C, D];

function writeResults() {
    function concatenateTo(element, text) {
        element.innerHTML = `${element.innerHTML} ${text}`;
    }
    concatenateTo(document.getElementById('A'), A);
    concatenateTo(document.getElementById('B'), B);
    concatenateTo(document.getElementById('C'), C);
    concatenateTo(document.getElementById('D'), D);

    // Search for the highest value
    let max = Math.max(...values);
    // Search for the highest value's index
    let max_index = values.indexOf(max);
    document.getElementById('resultado').innerHTML = max_index;
}