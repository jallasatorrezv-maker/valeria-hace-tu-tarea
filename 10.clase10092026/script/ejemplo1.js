let estudiantes = [];

function adicionarEstudiante() {
    let nombreInput = document.getElementById("nombre").value;
    let apellidosInput = document.getElementById("apellidos").value;
    let fechaInput = document.getElementById("fechaNacimiento").value;

    if (nombreInput !== "" || apellidosInput !== "") {
        estudiantes.push({
            nombre: nombreInput,
            apellidos: apellidosInput,
            fechaNacimiento: fechaInput
        });

      
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("fechaNacimiento").value = "";

        mostrarEstudiantes();
    }
}

function eliminarEstudiante() {
    
    if (estudiantes.length > 0) {
        estudiantes.pop();
        mostrarEstudiantes();
    }
}
function mostrarEstudiantes() {
    let respuesta = document.getElementById("respuesta");
    respuesta.style.whiteSpace = "pre-line";

    let textoFinal = "";

    for (let i = 0; i < estudiantes.length; i++) {
        textoFinal += (i + 1) + " "
         + estudiantes[i].nombre + " "
         + estudiantes[i].apellidos + "-"
        + estudiantes[i].fechaNcimiento+ " "
         + estudiantes[i].edad + "años - "
          + estudiantes[i].genero+ "\n " ;
    }

    respuesta.textContent = textoFinal;
}

mostrarEstudiantes()