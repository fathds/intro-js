//1.- número divisible entre 2
var numero=Number(prompt("Ingrese un número"))
if (numero % 2 === 0){
    console.log("El número es divisible entre dos")
} else{
console.log("NO es divisible entre dos")
}

//2.- Número par
var numero=Number(prompt("Ingrese un número"))
if (numero % 2 === 0){
    alert ("El número es par")
} else{
alert ("El número es INpar")
}

//3.- Premio
var numero=Number(prompt("Ingrese un número"))
if (numero === 1000){
    console.log("GANASTE UN PREMIO")
} else{
    console.log(numero + " Lo sentimos, sigue participando")
}

//4.- menor de dos números
var numero1=Number(prompt("Ingrese el primer número"))
var numero2=Number(prompt("Ingrese el segundo número"))
if (numero1 > numero2){
    console.log(numero2 +" es el número menor")
} else {
    console.log(numero1 + " es el número menor")
}

//5.- mayor de 3 números y dos números iguales
var numero1=Number(prompt("Ingrese el primer número"))
var numero2=Number(prompt("Ingrese el segundo número"))
var numero3=Number(prompt("Ingrese el tercer número"))
 if (numero1 > numero2){
         if (numero1 > numero3){
            console.log("Numero 1 es Mayor");
            }
            else{
              console.log("Numero 3 es Mayor");
               }
      }
      else{
         if(numero1 < numero2){
            if (numero2 > numero3){
               console.log("Numero 2 es Mayor");
               }
               else{
                  console.log("Numero 3 es Mayor");
                  }
            }
         }
if (numero1 == numero2){
   console.log("Numero 1 y Numero 2 son iguales ");
   }
   else if (numero1 == numero3){
   console.log("Numero 1 y Numero 3 son iguales ");
   }else if (numero2 == numero3){
   console.log("Numero 2 y Numero 3 son iguales ");
   }