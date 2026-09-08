// crear un programa q gestione una list de tareas
//debe permitir
let tareas =[];
function agregarTarea(tarea="",estado="incompleto"){
    if(tarea ==""){
        tarea=document.getElementById("tarea").value;
        estado=document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea,completada: estado});
}
function eliminarTarea(indice){
    if(indice >=0 && indice < tareas.length){
        tareas.splice(indice,1);
    }else{
        console.log("Índice inválido");
    }
}
function mostrarTareas(){
    console.log("Mostrando Lista de tareas:");
    tareas.forEach((tarea, indice) => {
        console.log(`${indice + 1}. [${tarea.completada}] ${tarea.descripcion}`);

        });
}
agregarTarea("Comprar leche","completada");
agregarTarea("Hacer ejercicio","completada");
agregarTarea("Estudiar JavaScript","incompleta");
agregarTarea("Subir a Github","incompleta");
mostrarTareas();