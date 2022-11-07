

let ObjetoFunciones = {
    buscarTarea : function(target) {
        target.reduce(function (acum, elemento, index){
            if (elemento.titulo === process.argv[3]){
                console.log("\nTarea encontrada\n------------------");
                console.log((index + 1) + '_ ' +acum.titulo + ' - ' + acum.estado);
            }
            else if (elemento.titulo !== process.argv[3]){
                console.log("Lo siento, elemento no encontrado " + 1)
            }
        })
        console.log();
    },
    eliminar: function (target) {
        if (process.argv[3]) {
            console.log("\nTarea eliminada\n------------------")
            let nuevaLista = target.filter((element, index) => {
                if (index + 1 != process.argv[3]) {
                    return (index + 1) + '_ ' + element.titulo + ' - ' + element.estado
                }
            })
            guardar(nuevaLista)
            
            nuevaLista.forEach((element, index) => {
                console.log((index + 1) + '_ ' + element.titulo + ' - ' + element.estado)
            });
            console.log();
        }
        else {
            console.log('\nIngresa el indice de la tarea que desea elimniar \n------------------')
            target.forEach((element, index) => {
                console.log((index + 1) + '_ ' + element.titulo + ' - ' + element.estado)
            });
            console.log()
        };
    },
    bienvenida: function () {
        console.log('\nBienvenido. Podes listar , agregar, eliminar o buscar tareas. o filtrar las tareas segun su estado\n------------------');
    },
    listar: function (target) {
        console.log('\nListado de tareas \n------------------')
        target.forEach((element, index) => {
            console.log((index + 1) + '_ ' + element.titulo + ' - ' + element.estado)
        });
        console.log();
    },

    agregar: function (target) {
        if (process.argv[3]) {
            objetoNuevo = {
                titulo: process.argv[3],
                estado: "pendiente"
            }
            target.push(objetoNuevo)
            guardar(target)
            console.log("\nNueva tarea creada\n-----------------\n" + (target.length) + "_ " + process.argv[3] + " - pendiente\n")
        }
        else {
            console.log("\nIngresa una tarea para agregar\n")
        };
    },

    filtrarArray: function (target) {
        if (process.argv[3]) {
            console.log("\nTarea " + process.argv[3] + "\n------------------")
            target.forEach(function (tarea) {
                if (tarea.estado === process.argv[3]) {
                    console.log(tarea.titulo)
                }
            })
            console.log("")
        }
        else {
            console.log("\ningresa un estado de tarea (terminada, en progreso o pendiente)\n")
        };
    }
}

module.exports = ObjetoFunciones

