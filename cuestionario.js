//Array con los indices de las respuestas seleccionadas
const answers = [];
//Array con los elementos HTML de las opciones
var elements = [];

function addOnClickEvent() {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec, i) => {
        const options = sec.querySelectorAll('li');
        const input = sec.querySelector('input');
        options.forEach((opt, j) =>
            opt.addEventListener('click', () => {
                answers[i] = j;
                checkValidity();
                setStyles();
            })
        );
        elements.push(options);
    });
    setStyles();
}

function checkValidity() {
    if (!answers.includes() && elements.length <= answers.length)
        document.getElementById('submit').disabled = false;
}

function setStyles() {
    //Se deseleccionan todas las opciones
    elements.forEach(sec => sec.forEach(opt => opt.className = 'options unselected'));

    //Se seleccionan todas las que están guardadas en answers
    answers.forEach((ans, i) => {
        elements[i][ans].className = 'options selected';
    });
}

function countOptions(form) {
    const counts = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };
    answers.forEach(ans => {
        if (ans == 0)
            counts.a++;
        else if (ans == 1)
            counts.b++;
        else if (ans == 2)
            counts.c++;
        else if (ans == 3)
            counts.d++;
    });

    const input = document.createElement('input');
    input.type = 'hidden'

    Object.entries(counts).forEach(([k, v]) => {
        const clone = input.cloneNode(true);
        clone.name = k;
        clone.value = v;
        form.appendChild(clone);
    });
}