//////////////borrado/////////////////////

function c() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML = " ";
    let salida2 = document.getElementById("letraPequenia");
    salida2.innerHTML = " ";
}

function borrar() {
    let salida = document.getElementById("letraGrande").innerHTML;
    let arrSalida = [...salida]
    let a = arrSalida.pop();
    // let stiSalida = arrSalida.toString();
    // let nuevaSalida = stiSalida.replace(/,/g, "");
    arrSalida = arrSalida.toString().replace(/,/g, "");
    
    document.getElementById("letraGrande").innerHTML = arrSalida;
} 

//////////numeros////////////////

function uno() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "1";
}

function dos() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "2";
}

function tres() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "3";
}

function cuatro() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "4";
}

function cinco() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "5";
}

function seis() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "6";
}

function siete() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "7";
}

function ocho() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "8";
}

function nueve() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "9";
}

function cero() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "0";
}

function punto() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += ".";
}

///////////signo//////////////

function signoSuma() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "+";
}

function signoResta() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "-";
}

function signoMultiplicacion() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "x";
}

function signoDivicion() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "÷";
}

function signoPromedio() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "%";
}

//////////////procedimientos//////////////////

// function sumar() {
//     let salida = document.getElementById("letraGrande").innerHTML;
//     let a = 0;
//     let b = salida.indexOf("+");
//     let num1sti = salida.slice(a, b);
//     let num1 = parseFloat(num1sti);
//     let c = salida.indexOf("+");
//     let d = salida.length;
//     let num2sti = salida.slice(c + 1, d);
//     let num2 = parseFloat(num2sti);
//     return num1 + num2
// }

// function restar() {
//     let salida = document.getElementById("letraGrande").innerHTML;
//     let a = 0;
//     let b = salida.indexOf("-");
//     let num1sti = salida.slice(a, b);
//     let num1 = parseFloat(num1sti);
//     let c = salida.indexOf("-");
//     let d = salida.length;
//     let num2sti = salida.slice(c + 1, d);
//     let num2 = parseFloat(num2sti);
//     return num1 - num2
// }

// function multiplicar() {
//     let salida = document.getElementById("letraGrande").innerHTML;
//     let a = 0;
//     let b = salida.indexOf("x");
//     let num1sti = salida.slice(a, b);
//     let num1 = parseFloat(num1sti);
//     let c = salida.indexOf("x");
//     let d = salida.length;
//     let num2sti = salida.slice(c + 1, d);
//     let num2 = parseFloat(num2sti);
//     return num1 * num2
// }

// function dividir() {
//     let salida = document.getElementById("letraGrande").innerHTML;
//     let a = 0;
//     let b = salida.indexOf("÷");
//     let num1sti = salida.slice(a, b);
//     let num1 = parseFloat(num1sti);
//     let c = salida.indexOf("÷");
//     let d = salida.length;
//     let num2sti = salida.slice(c + 1, d);
//     let num2 = parseFloat(num2sti);
//     return num1 / num2
// }

// function porciento() {
//     let salida = document.getElementById("letraGrande").innerHTML;
//     let a = 0;
//     let b = salida.indexOf("%");
//     let num1sti = salida.slice(a, b);
//     let num1 = parseFloat(num1sti);
//     return (num1 / 100)
// }

// ///////////////resultado////////////

// function procedimiento() {
//     let salida = document.getElementById("letraGrande").innerHTML;

// console.log(salida);
//     let resultado = "";
//     if (salida.includes("+") == true) {
//         resultado = sumar()
//     } 
//     if (salida.includes("-") == true) {
//         resultado = restar()
//     } 
//     if (salida.includes("x") == true) {
//         resultado = multiplicar()
//     } 
//     if (salida.includes("÷") == true) {
//         resultado = dividir()
//     } 
//     if (salida.includes("%") == true) {
//         resultado = porciento()
//     } 

// console.log(resultado);
//     document.getElementById("letraPequenia").innerHTML = resultado;
// }

// Resultado 2 ///////////////// Ahora se pueden hacer mas de 1 procedimiento a la vez

const signos = ["+", "-", "x", "÷"];

function procedimiento() {
    let salida = document.getElementById("letraGrande").innerHTML;  

    let numsStr = salida.split(/[+÷-]|x/);
    let nums = numsStr.map(Number);

    let a = [...salida];
    let filSigno = a.filter(b => signos.includes(b));
    
    let resultado = nums[0];

    for (let i = 1; nums.length > i; i++) {
        let usoSigno = filSigno[i - 1];
        switch (usoSigno) {
            case "+":
                resultado = resultado + nums[i];
                break;
            case "-":
                resultado = resultado - nums[i];
                break;
            case "x":
                resultado = resultado * nums[i];
                break;
            case "÷":
                resultado = resultado / nums[i];
                break;
        }
    }
    document.getElementById("letraPequenia").innerHTML = resultado;
}