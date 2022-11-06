const fs = require('fs');
const path = require('path');

let ObjetoFunciones = require('./funcionesDeTareas');
let arrayDeTareas = JSON.parse(fs.readFileSync(path.join(__dirname, "tareas.json"), 'utf-8'));

guardar = function (array) {
    fs.writeFileSync(path.join(__dirname, 'tareas.json'), JSON.stringify(array, null, 3), 'utf-8');
}

switch (process.argv[2]) {
    case ("listar"):
        ObjetoFunciones.listar(arrayDeTareas)
        break;
    case ("agregar"):
        ObjetoFunciones.agregar(arrayDeTareas)
        break;
    case ("eliminar") :
        ObjetoFunciones.eliminar(arrayDeTareas)
        break;
    case ("filtrar"):
        ObjetoFunciones.filtrarArray(arrayDeTareas)
        break;    
    case ("buscar"):
        ObjetoFunciones.buscarTarea(arrayDeTareas)
        break
    default:
        ObjetoFunciones.bienvenida()
        break;
}