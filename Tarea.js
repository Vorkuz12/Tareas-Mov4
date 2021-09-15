
//1
//Llenar Arreglo
function llenarArreglo(numero, valor){
    // Declaro Un Arreglo
 var array = [];
 //Recorremos el arreglo
  for(let i = 0; i < numero; i++){
    //Le ingresamos el valor al numero de tamaño de arreglo
      array.push(valor);
  }
  return array;
}
console.log(llenarArreglo(5,'Laptos'))

//2
//Revertir Arreglo
function revertirArreglo(array){
    var revertArray = [];
    for (let index = array.length;  index > 0 ;--index) {
        const element = array[index];   
        revertArray.push(array[index-1]);     
    }
  return revertArray;

}
console.log(revertirArreglo([1,2,3,4,5,6]));
//3
//Arreglos iguales 
function EqualsArray(array_one, array_two){
    var request = true;
    if(array_one.length == array_two.length){
       for (let index = 0; index < array_one.length; index++) {
           if(array_one[index] != array_two[index])
           request = false;
           break;
       }
    }else{
        request = false;
    }
    return request;
}
console.log(EqualsArray([1,5,3], [1,2,3]));
//4
// Ecriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto
function llaveValor (arreglo) {
    let objeto = {};
    for (let i = 0; i < arreglo.length; ++i) {
      let a = arreglo[i];
      objeto[a[0]] = a[1];
    }
    return objeto;
  }
  console.log(llaveValor([['nombre', 'David'], ['apellido', 'Vargas']]));
// 5
//Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos
//duplicados, PERO no pueden usar el new Set() de JS.
function removerDuplicados (arreglo) {
    let arregloNuevo = [];
    let verificacion = true;
    for (let i = 0; i < arreglo.length; ++i) {
      for (let j = 0; j < arregloNuevo.length; ++j) {
        if (arregloNuevo[j] == arreglo[i]) {
          verificacion = false;
        }
      }
      if (verificacion) {
        arregloNuevo.push(arreglo[i]);
      }
      verificacion = true;
    }
    return arregloNuevo;
  }
  console.log(removerDuplicados([1,7,4,2,1,4,5,1,1,9]));
 //6
 //Escriba una función que reciba dos arreglos y devuelva la intersección. devolver los
 //elementos que están en los dos arreglos.
 function interseccionArreglos (arreglo1, arreglo2) {
    let inter = [];
    for (let i = 0; i < arreglo1.length; ++i) {
      for (let j = 0; j < arreglo2.length; ++j) {
        if (arreglo1[i] == arreglo2[j]) {
          inter.push(arreglo1[i]);
        }
      }
    }
    return inter;
  }
  console.log(interseccionArreglos([1,2,3,4],[5,3,1,8,9,7]));
//7
//Escriba una función que reciba un variable y diga si es un arreglo.
function esArreglo (variable) {
    return Array.isArray(variable);
  }
  console.log(esArreglo([15]));
//8
//Clone Array
function clonarArreglo (arreglo) {
    let copia = arreglo;
    return copia;
  }
  console.log(clonarArreglo([1,2,3,4,5]));
//9
//Escriba una función que reciba un arreglo de strings y devuelva todos los strings
//concatenados.
function concatenarString (arreglo) {
    let stringConcat = '';
    for (let i = 0; i < arreglo.length; ++i) {
      stringConcat = stringConcat + arreglo[i] + " ";
    }
    return stringConcat;
  }
  console.log(concatenarString(['Hola', 'Mundo', 'soy', 'GERMAN']));

//10
//Escriba una función que reciba un número e inserte un '-' menos entre los números
//pares y un '*' asterico entre dos números impares.
function formatearNumero (numero) {
    let nuevoNumero = '';
    let numeroPropio = numero.toString();
    for (let i = 0; i < numeroPropio.length; ++i) {
      if (i != numeroPropio.length - 1) {
        if ((numeroPropio.charAt(i) % 2 == 0) && (numeroPropio.charAt(i+1) % 2 == 0)) {
          nuevoNumero = nuevoNumero + numeroPropio.charAt(i) + '-';
        } else if ((numeroPropio.charAt(i) % 2 != 0) && (numeroPropio.charAt(i+1) % 2 != 0)) {
          nuevoNumero = nuevoNumero + numeroPropio.charAt(i) + '*';
        } else {
          nuevoNumero = nuevoNumero + numeroPropio.charAt(i);
        }
      } else {
        nuevoNumero = nuevoNumero + numeroPropio.charAt(i);
      }
    }
    return nuevoNumero;
  }
  console.log(formatearNumero(6578490338874747));
//11
//Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de
//posición al azar. Pueden usar Math.random()
function barajarArreglo (arreglo) {
    let nuevoArreglo = [];
    nuevoArreglo = arreglo.sort(()=> Math.random() - 0.5);
    return nuevoArreglo;
  }
  console.log(barajarArreglo([1,2,3,4,5,6,7,8]));
// 12
//Escriba una función que encuentre los valores repetidos de un arreglo.
  function RepeatValues (arreglo) {
    let repeatArray = [];
    for (let i = 0; i < arreglo.length; ++i) {
      for (let j = i +1; j < arreglo.length; ++j) {
        if (arreglo[i] == arreglo[j]) {
          repeatArray.push(arreglo[i]);
        }
      }
    }
    return repeatArray;
  }
  console.log(RepeatValues([1,2,3,4,5,6,1,2,3,7,5,4,6,7,8,9,0])); 
// 13
//Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver
//los valores que solo están en uno y no en el otro.
  function encontrarDiferencia (arreglo_one, arreglo_two) {
    let diferenteArray = [];
    let validacion1 = true;
    let validacion2 = true;
    for (let i = 0; i < arreglo_one.length; ++i) {
      for (let j = 0; j < arreglo_two.length; ++j) {
        if (arreglo_one[i] == arreglo_two[j]) {
          validacion1 = false;
        } else if (arreglo_two[i] == arreglo_one[j]) {
          validacion2 = false;
        }
      }
      if (validacion1) {
        diferenteArray.push(arreglo_one[i]);
      }
      if (validacion2) {
        diferenteArray.push(arreglo_two[i]);
      }
      validacion1 = true;
      validacion2 = true;
    }
    return diferenteArray;
  }
  console.log(encontrarDiferencia([1,2,3,4,5],[3,4,5,6,7]));
//14
//Escriba una función que 'aplane' un arreglo
function aplanarArreglo (arreglo) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; ++i) {
      if (Array.isArray(arreglo[i])) {
        let arregloTemporal = arreglo[i];
        for (let j = 0; j < arregloTemporal.length; ++j) {
          resultado.push(arregloTemporal[j]);
        }
      } else {
        resultado.push(arreglo[i]);
      }
    }
    return resultado;
  }
  console.log(aplanarArreglo([[1,2],3,4,5,[6,7,8]]));
//15
//Escriba una función que imprima en consola "Hola Mundo!"
function holaMundo () {
    console.log("Hola Mundo");
  }
  holaMundo();
//16
//Escriba una función que revise si un string está vacío o no.
function stringVacio (variable) {
    if (variable.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(stringVacio(""));

//17
//Escriba una función que extraiga solo los primeros n caracteres de un string.
function extraerCaracteres (variable, cantidad) {
    return variable.substring(0, cantidad);
  }
  console.log(extraerCaracteres("EXTRAER", 4));
//18
//Escriba una función que ponga la primera letra en mayúscula y el resto minúsculas
function upperCase (variable) {
    let primera = variable.charAt(0);
    let resto = variable.substring(1,variable.length);
    variable = primera.toUpperCase() + resto.toLowerCase();
    return variable;
  }
  console.log(upperCase("david"));
  
//19
//Escriba una función que reciba un arreglo de objetos y los ordene de mayor a
//menor por el atributo id
function ordenarObjetos (arreglo) {
    arreglo.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }
  let ejemplo = [{name: 'Oscar', id: 14}, {name: 'Torres', id: 7}, {name: 'AuronPlay', id: 1}];
  ordenarObjetos(ejemplo);
  console.log(ejemplo);


//20
//Escriba una función que reciba un número (lo reciben como string) y le dé la vuelta.
function backNumber (numero) {
    let resultado = '';
    for (let i = numero.length; i > 0; --i) {
      resultado = resultado + numero.charAt(i-1);
    }
    return resultado;
  }
  console.log(backNumber('473890'));
//21
//Escriba una función que reciba un string y diga si es palíndromo o no.
function esPalindromo (variable) {
    let vuelta = '';
    for (let i = variable.length; i > 0; --i) {
      vuelta = vuelta + variable.charAt(i-1);
    }
    if (vuelta == variable) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esPalindromo('ANNA'));
//22
//Escriba una función que reciba un string y encuentre la palabra más grande del
//string.
function longString (variable) {
    let palabras = variable.split(" ");
    let resultado = '';
    for (let i = 0; i < palabras.length; ++i) {
      if (palabras[i].length > resultado.length) {
        resultado = palabras[i];
      }
    }
    return resultado;
  }
  console.log(longString('Parangaricutirimícuaro, De Parangaricutiro, del poblado de San Juan Parangaricutiro.'));

//23
//Escriba una función que reciba un arreglo y una función y ejecute la función en
//cada elemento del arreglo.
function sendFunction (arreglo, funcion) {
    for (let i = 0; i < arreglo.length; ++i) {
      console.log(funcion(arreglo[i]));
    }
  }
  function ft (elemento) {
    return elemento / elemento * 1000 / 2;
  }
  sendFunction([1,2,3,4,5], ft);
  

//24
//Escriba una función que reciba un arreglo y una función, si la función devuelve true
//agrega el elemento a un arreglo de los que pasaron y sino a un arreglo de los que
//NO pasaron, imprime los dos.

let arreglo2 = [10,20,30,40,50];
function agregarElementos (arreglo, funcion) {
  let guardar = [];
  for (let i = 0; i < arreglo.length; ++i) {
    let numero = arreglo[i] * arreglo[i];
    console.log(numero);
    if (funcion(numero)) {
      guardar.push(numero);
    } else {
      arreglo2.push(numero);
    }
  }

  for (let i = 0; i < guardar.length; ++i) {
    arreglo.push(guardar[i]);
  }
}

function esPar (elemento) {
  if (elemento %2 == 0) {
    return true;
  } else {
    return false;
  }
}

let arreglo1 = [1,2,3,4,5];
agregarElementos(arreglo1, esPar);
console.log(arreglo1);
console.log(arreglo2);