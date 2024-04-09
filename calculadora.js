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
    arrSalida = arrSalida.toString().replace(/,/g, "");
    document.getElementById("letraGrande").innerHTML = arrSalida;
} 

////////// Numeros ////////////////

function numeros(value) {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += value;
}

function signoEscrito(value) {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += value;
}

////////// Punto //////////////////

function punto() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += ".";
}

/////////// Promedio //////////////

function signoPromedio() {
    let salida = document.getElementById("letraGrande");
    salida.innerHTML += "%";
}

////////// Resultado = /////////////

const signos = ["+", "-", "x", "÷"];

function procedimiento() {
    let salida = document.getElementById("letraGrande").innerHTML;  

    let numsStr = salida.split(/[+÷-]|x/);
    let nums = numsStr.map(Number);

    let a = [...salida];
    let filSigno = a.filter(b => signos.includes(b));
    
    let resultado = nums[0];
    const procesos = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '÷': (a, b) => a / b
    }

    for (let i = 1; nums.length > i; i++) {
        let usoSigno = filSigno[i - 1];
        resultado = procesos[usoSigno](resultado, nums[i]);
    }
    document.getElementById("letraPequenia").innerHTML = resultado;
}