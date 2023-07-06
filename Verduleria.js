let cajonDeFrutas = ["Manzana", "Naranja", "Naranja", "Banana", "Banana", "Banana",]
let chango = []
let resultado = []

function Verdulero(arrayTarget,variedadDeElementos,candidadDeCadaElemento) {
    for (let i = 0; i < arrayTarget.length; i++) {
        if (variedadDeElementos.includes(arrayTarget[i])) {
        }
        else {
            variedadDeElementos.push(arrayTarget[i])
        }
    }

    for (let i = 0; i < variedadDeElementos.length; i++) {
        candidadDeCadaElemento.push(arrayTarget.filter(fruta => fruta === variedadDeElementos[i]).length + " " + variedadDeElementos[i] + "s")
    }
    console.log("La ensalada tiene " + candidadDeCadaElemento)
}

Verdulero(cajonDeFrutas,chango,resultado)