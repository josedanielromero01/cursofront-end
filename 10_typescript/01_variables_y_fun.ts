
let unNumero : number;

unNumero = 12;
//unNumero = "un texto";

console.log("Un numero " + unNumero);

var unTexto = "Un texto";

console.log(unTexto);
alert(unTexto);

let siONo : boolean;

siONo = true;

if (siONo){
    console.log("Pues parece que sí.");
}
let miUnion : number | string | boolean;
miUnion = "Puede ser cadena";
miUnion = 3535;
miUnion = unTexto == "Un texto" && unNumero == 12;

interface Tiempo{
    dia: number;
    mes : number;
    anio : number;

    mostrar();
};
class Cumpleanios implements Tiempo{
    dia: number | string;
    mes : number;
    anio : number;

    mostrar(){
        console.log("Cumpleaños feliz! Hoy " + this.dia + " del " + this.mes +);
    }
}

var miCumple : Tiempo = {dia: 2, mes: 11, anio: 1998};
console.log("Cumplo años el " + miCumple.dia + " del " + miCumple.mes + " del " + miCumple.anio);

miCumple.mostrar(); 