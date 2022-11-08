let params = (new URL(document.location)).searchParams;
let A = parseInt(params.get('a'));
let B = parseInt(params.get('b'));
let C = parseInt(params.get('c'));
let D = parseInt(params.get('d'));
let values = [A, B, C, D];

let perfiles = {
    0: {
        nombre: "Analítico",
        descripcion: `Las habilidades que mejor te definen son <b>el orden, la lógica y la objetividad</b>. Te gusta tener las
        cosas bajo control y
        tomarte tu tiempo antes de tomar una decisión.Tiendes a la cautela, la observación, la coherencia y la
        constancia.

        Te sientes en tu zona de confort realizando cálculos, gestionando documentación o resolviendo
        incidencias, siempre que
        dispongas de las herramientas e indicaciones necesarias.De lo contrario, te incomoda trabajar sin un
        plan y te resulta
        complicado adaptarte a los cambios.Por otro lado, tratar con personas no es tu punto fuerte, pero si
        ello te va a
        acercar a tu objetivo, lo haces.

        Algunas de las profesiones donde se requiere este perfil son<b>disciplinas relacionadas con las
            ciencias,
        la ingeniería y las tecnologías.`
    },
    1: {
        nombre: "Social",
        descripcion: `Las habilidades que mejor te definen son la empatía, la comunicación y la extroversión. Te gusta
        relacionarte con los
        demás, apoyar y que te apoyen en la toma de decisiones. Eres una persona sensible, solidaria,
        comprometida y enérgica.

        Te sientes cómodo en contacto con otras personas, te gusta generar bienestar y aportar beneficios con
        tus acciones. En
        cambio, te incomoda trabajar en ambientes fríos o conflictivos, sobre todo, si te impiden disfrutar de
        tu labor.
        Asimismo, la neutralidad no es tu punto fuerte, a veces te implicas emocionalmente y eres subjetivo..

        Algunas de las profesiones en las que mejor encajan tus habilidades son aquellas disciplinas
        relacionadas con la
        medicina, la educación, el comercio y el marketing, entre otras.`
    },
    2: {
        nombre: "Artístico",
        descripcion: `Las habilidades que mejor te definen son la creatividad, la pasión, la reflexión y la sensibilidad.

        Te gusta imaginar y crear aunque eso suponga romper los esquemas. Te sientes cómodo cuando tienes
        autonomía y espacio
        para experimentar, por ello, te incomoda la falta de libertad y la rigidez de las normas. Por otro lado,
        la practicidad
        no es tu punto fuerte y te cuesta asumir que no todas las ideas son posibles de ejecutar.

        Algunas de las profesiones que se adaptan a tu perfil son las relacionadas con el mundo del arte, como
        diseño de
        interiores, diseño de moda, arquitectura y audiovisuales.`
    },
    3: {
        nombre: "Emprendedor",
        descripcion: `Las habilidades que mejor te definen son la empatía, la comunicación y la extroversión. Te gusta
        relacionarte con los
        demás, apoyar y que te apoyen en la toma de decisiones. Eres una persona sensible, solidaria,
        comprometida y enérgica.

        Te sientes cómodo en contacto con otras personas, te gusta generar bienestar y aportar beneficios con
        tus acciones. En
        cambio, te incomoda trabajar en ambientes fríos o conflictivos, sobre todo, si te impiden disfrutar de
        tu labor.
        Asimismo, la neutralidad no es tu punto fuerte, a veces te implicas emocionalmente y eres subjetivo..

        Algunas de las profesiones en las que mejor encajan tus habilidades son aquellas disciplinas
        relacionadas con la
        medicina, la educación, el comercio y el marketing, entre otras.`
    }
}

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
    let indexes = findIndexesOf(max);
    console.log(indexes)
    let result = "";
    for (i of indexes) {
        result += `<h3>${perfiles[i].nombre}</h3><p>${perfiles[i].descripcion}</p>`;
    }
    document.getElementById('resultado').innerHTML = result;
}

function findIndexesOf(max) {
    let i = -1;
    let indexes = [];
    while (true) {
        i = values.indexOf(max, i + 1);
        if (i != -1)
            indexes.push(i);
        else
            break;
    }
    return indexes;
}