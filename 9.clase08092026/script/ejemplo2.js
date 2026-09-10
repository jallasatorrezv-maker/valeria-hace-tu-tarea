

let tareas = [
  { descripcion: "Comprar leche", completada: "completada" },
  { descripcion: "Hacer ejercicio", completada: "completada" },
  { descripcion: "Estudiar JavaScript", completada: "incompleta" },
  { descripcion: "Subir a GitHub", completada: "incompleta" }
];

function agregarTarea() {
  let texto = document.getElementById("tarea").value;
  let estadoSelect = document.getElementById("tareaSelect").value;

  if (texto !== "") {
    if (estadoSelect === "") {
      estadoSelect = "incompleta";
    }

    tareas.push({ 
      descripcion: texto, 
      completada: estadoSelect 
    });

    document.getElementById("tarea").value = "";
    document.getElementById("tareaSelect").value = "";
  }
}

function mostrarTareas() {
  let respuesta = document.getElementById("respuesta");
  
  
  respuesta.style.whiteSpace = "pre-line";

  let textoResultado = "";
  for (let i = 0; i < tareas.length; i++) {
    textoResultado += (i + 1) + ". [" + tareas[i].completada + "] " + tareas[i].descripcion + "\n";
  }


  respuesta.textContent = textoResultado;
}