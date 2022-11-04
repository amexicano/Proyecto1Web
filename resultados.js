let params = (new URL(document.location)).searchParams;
let A = params.get('A');
let B = params.get('B');
let C = params.get('C');
let D = params.get('D');

function writeResults() {
    document.getElementById('A').innerHTML = A;
    document.getElementById('B').innerHTML = B;
    document.getElementById('C').innerHTML = C;
    document.getElementById('D').innerHTML = D;

    // Search for the highest value
    let max = Math.max(A, B, C, D);
    // Search for the highest value's index
    let max_index = [A, B, C, D].indexOf(max);

}
let values = Array.from(params.values()).sort();
console.log(values);

let total_counts = [];
let most_repeated = [];
let last_val;

values.forEach((val, i) => {
    if (i == 0 || val != last_val) {
        total_counts[val] = 1;
    } else
        total_counts[val]++;
    last_val = val;
});

function writeResults() {
    const labels = document.getElementsByClassName('cantidades');
    Array.from(labels).forEach((l, i) => l.innerHTML = `${l.innerHTML} ${total_counts[i] ?? 0}`);
}