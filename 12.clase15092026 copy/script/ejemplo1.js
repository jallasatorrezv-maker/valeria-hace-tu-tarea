const listaEstudiantes = [
  {
    nro: 1,
    nombre: "Juan",
    apellido: "Perez",
    "fecha de nacimiento": "21/09/2000",
    edad: 23,
    genero: "Masculino"
  },
  {
    nro: 2,
    nombre: "Maria",
    apellido: "Lopez",
    "fecha de nacimiento": "15/03/2001",
    edad: 22,
    genero: "Femenino"
  },
  {
    nro: 3,
    nombre: "Carlos",
    apellido: "Gomez",
    "fecha de nacimiento": "08/11/1999",
    edad: 24,
    genero: "Masculino"
  },
  {
    nro: 4,
    nombre: "Ana",
    apellido: "Flores",
    "fecha de nacimiento": "27/06/2002",
    edad: 21,
    genero: "Femenino"
  },
  {
    nro: 5,
    nombre: "Luis",
    apellido: "Martinez",
    "fecha de nacimiento": "10/01/2000",
    edad: 23,
    genero: "Masculino"
  },
  {
    nro: 6,
    nombre: "Sofia",
    apellido: "Rojas",
    "fecha de nacimiento": "19/08/2001",
    edad: 22,
    genero: "Femenino"
  },
  {
    nro: 7,
    nombre: "Pedro",
    apellido: "Vargas",
    "fecha de nacimiento": "05/12/1998",
    edad: 25,
    genero: "Masculino"
  },
  {
    nro: 8,
    nombre: "Valeria",
    apellido: "Mendoza",
    "fecha de nacimiento": "30/04/2003",
    edad: 20,
    genero: "Femenino"
  },
  {
    nro: 9,
    nombre: "Diego",
    apellido: "Torres",
    "fecha de nacimiento": "14/07/2000",
    edad: 23,
    genero: "Masculino"
  },
  {
    nro: 10,
    nombre: "Camila",
    apellido: "Castro",
    "fecha de nacimiento": "22/10/2002",
    edad: 21,
    genero: "Femenino"
  }
];
function mostrarEstudiantes() 
{
    const datos=document.getElementById("datos");
    datos.innerHTML="";
    let fila="";
    listaEstudiantes.forEach(
        est=>{
             fila=`
              <tr>
                <td>${est.nro}</td>
                <td>${est.nombre}</td>
                <td>${est.apellido}</td>
                <td>${est["fecha de nacimiento"]}</td>
                <td>${est.edad}</td>
                <td>${est.genero}</td>
              </tr>
            `;
         datos.innerHTML+=fila;
        }
    );
}

mostrarEstudiantes();


function adicionarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;

    listaEstudiantes.push({
        nro: listaEstudiantes.length + 1,
        nombre: nombre,
        apellido: apellido,
         "fecha de nacimiento": fechaNacimiento,
        edad: edad,
        genero: genero
    });

    mostrarEstudiantes();
}
