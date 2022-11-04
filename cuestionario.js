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
                input.name = i;
                input.value = j;

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