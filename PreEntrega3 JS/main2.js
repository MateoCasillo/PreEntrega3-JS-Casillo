let alumnos = [];

let form = document.getElementById("formulario");

form.addEventListener("submit", agregarAlumno);

function agregarAlumno(e) {
    e.preventDefault();

    let formulario = e.target;

    let infoAlumno = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        notas: [
            parseFloat(formulario.nota1.value),
            parseFloat(formulario.nota2.value),
            parseFloat(formulario.nota3.value),
            parseFloat(formulario.nota4.value),
            parseFloat(formulario.nota5.value)
        ]
    }

    // Calcula el promedio de las notas
    infoAlumno.promedio = calcularPromedio(infoAlumno.notas);

    let nuevoAlumno = document.createElement("li");
    nuevoAlumno.innerText = `Nombre: ${infoAlumno.nombre}, Apellido: ${infoAlumno.apellido}, Promedio: ${infoAlumno.promedio.toFixed(2)}`;

    document.querySelector("#alumnos").appendChild(nuevoAlumno);

    alumnos.push(infoAlumno);

    document.getElementById("reset").click();
}

function calcularPromedio(notas) {
    return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}

let btnGuardar = document.getElementById("guardar");

btnGuardar.onclick = ()=> {
    localStorage.setItem("listaAlumnos", JSON.stringify(alumnos));
}