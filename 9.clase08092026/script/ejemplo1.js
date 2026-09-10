let tareas = [];
function agregarTareas(tarea = "", estado = "incompleta") {
    if (tarea === "") {
        tarea = document.getElementById("tarea").value;
        estado = document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea, completada: estado });
}
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    } else {
        console.log("Índice inválido");
    }
}
function mostrarTareas() {
    console.log("Mostrando lista de tareas:");
    tareas.forEach((tarea, indice) => {
        console.log(`${indice + 1} . [${tarea.completada }] ${tarea.descripcion}`);


    });
}
agregarTareas("Comprar leche", "completada");
agregarTareas("Hacer ejercicio", "completada");
agregarTareas("Estudiar JavaScript", "incompleta");
agregarTareas("Subir a GitHub", "incompleta");
mostrarTareas();