//ejemplo de ITERAR UN ARREGLO 
var arreglo = ["hola", 1 , true, null]
for ( var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}

// ACTIVIDAD 5, punto 1
var arreglo = [1, 4, 6, 10 , 22, 55, 46, 2, 5, 0]
for ( var i = 0; i <arreglo.length; i++){
    if(arreglo[i]>3)
    console.log(arreglo[i])
}

// ACTIVIDAD 5, punto 2
var arreglo=[]
var i= 0
while (i<5){
    arreglo[i] = i
    i ++
}
console.log(i)