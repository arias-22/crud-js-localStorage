const localStorageEmpresa = localStorage.getItem("EMPRESA_01");

let parsedEmpresa;

if (!localStorageEmpresa) {
    localStorage.setItem("EMPRESA_01", JSON.stringify([
        {id: 1, nombre: "Empresa 1", NIT: 12345678911 , fecha_fundacion: "31/12/1999"},
        {id: 2, nombre: "Empresa 2", NIT: 12345678911 , fecha_fundacion: "31/12/1999"},
        {id: 3, nombre: "Empresa 3", NIT: 12345678911 , fecha_fundacion: "31/12/1999"},
        {id: 4, nombre: "Empresa 4", NIT: 12345678911 , fecha_fundacion: "31/12/1999"},
        {id: 5, nombre: "Empresa 5", NIT: 12345678911 , fecha_fundacion: "31/12/1999"},
    ]));
    parsedEmpresa = JSON.parse(localStorageEmpresa);
    obtenerRegistros(parsedEmpresa);
    
}else{
    parsedEmpresa = JSON.parse(localStorageEmpresa);
    obtenerRegistros(parsedEmpresa);
}

function obtenerRegistros(parsedEmpresa) {
    let filas = "";
    parsedEmpresa.map(function (empresa){
      filas += `
    <tr>
        <td>${empresa.id}</td>
        <td>${empresa.nombre}</td>
        <td>${empresa.NIT}</td>
        <td>${empresa.fecha_fundacion}</td>
        <td>
        <button class="btn btn-primary">Editar</button>
        <button value="${empresa.id}" class="btn btn-danger">Eliminar</button>
        </td>
    </tr>
    `;
    });
 document.getElementById('tableBody').innerHTML = filas

}

function actualizarRegistros(arrayEmpresas){
    localStorage.setItem("EMPRESA_01", JSON.stringify(arrayEmpresas));
    obtenerRegistros(arrayEmpresas);
    parsedEmpresa = arrayEmpresas;
}

function deleteEmpresa(id,arrayEmpresas){    
      arrayEmpresas = arrayEmpresas.filter(objeto => objeto.id !== id);
    return arrayEmpresas
}

const btnDelete = document.getElementById("tableBody").addEventListener("click", (event) => {
    console.log(parseInt(event.target.value) );
    console.log(parsedEmpresa);
    if (event.target.innerText == "Eliminar") {
        try {
            actualizarRegistros(deleteEmpresa(parseInt(event.target.value), parsedEmpresa));
        } catch (e) {
            console.error(e);
        }
    }
});