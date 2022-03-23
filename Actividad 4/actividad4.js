//Actividad 4, punto 2
var numero=Number(prompt("Ingrese un número"))
var contador=1
while (contador <= numero) {
    if (contador % 5 === 0)
        console.log(contador)
        contador++;
}

//Actividad 4, punto 3
var numero=Number(prompt("Ingrese un número"))
var contador=1
do {
    if (contador % 5 === 0){
        console.log(contador)
    }
    contador ++;  
}
while (contador <= numero)

//Actividad 4, punto 4
var contador = 0
for ( var index = 1; index <= 50; index++){
    if (index % 2 === 1){
        contador = contador + 1;
        console.log( index + " es impar")
    }
}