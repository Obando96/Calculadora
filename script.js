const contenedorBotones = document.getElementById("contenedorBotones");
const resultado = document.getElementById("resultado");
const filas = 5;
const columnas = 4;
let cuadriculasNumeros;

function crearBotones(){
    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < filas; j++) {
            let cuadriculas = document.createElement("button");
            cuadriculas.classList.add("botones");
            contenedorBotones.appendChild(cuadriculas);
            console.log(cuadriculas);
        }
        contenedorBotones.style.gridTemplateRows = `repeat(${filas}, auto)`;
    }
    contenedorBotones.style.gridTemplateColumns = `repeat(${columnas}, auto)`;

    cuadriculasNumeros = contenedorBotones.querySelectorAll(".botones");
    console.log(cuadriculasNumeros);

    cuadriculasNumeros[12].classList.add("numero");
    cuadriculasNumeros[13].classList.add("numero");
    cuadriculasNumeros[14].classList.add("numero");
    cuadriculasNumeros[8].classList.add("numero");
    cuadriculasNumeros[9].classList.add("numero");
    cuadriculasNumeros[10].classList.add("numero");
    cuadriculasNumeros[4].classList.add("numero");
    cuadriculasNumeros[5].classList.add("numero");
    cuadriculasNumeros[6].classList.add("numero");
    cuadriculasNumeros[17].classList.add("numero");
    cuadriculasNumeros[11].classList.add("operacion");
    cuadriculasNumeros[15].classList.add("operacion");
    cuadriculasNumeros[7].classList.add("operacion");
    cuadriculasNumeros[3].classList.add("operacion");
    cuadriculasNumeros[16].setAttribute("id", "masMenos");
    cuadriculasNumeros[18].classList.add("numero");
    cuadriculasNumeros[19].setAttribute("id", "igual");
    cuadriculasNumeros[0].setAttribute("id", "porcentaje");
    cuadriculasNumeros[1].setAttribute("id", "borrarNumero");
    cuadriculasNumeros[2].setAttribute("id", "borrarTodo");

    cuadriculasNumeros[12].innerHTML = "1";
    cuadriculasNumeros[13].innerHTML = "2";
    cuadriculasNumeros[14].innerHTML = "3";
    cuadriculasNumeros[8].innerHTML = "4";
    cuadriculasNumeros[9].innerHTML = "5";
    cuadriculasNumeros[10].innerHTML = "6";
    cuadriculasNumeros[4].innerHTML = "7";
    cuadriculasNumeros[5].innerHTML = "8";
    cuadriculasNumeros[6].innerHTML = "9";
    cuadriculasNumeros[16].innerHTML = "+/-";
    cuadriculasNumeros[17].innerHTML = "0";
    cuadriculasNumeros[18].innerHTML = ".";
    cuadriculasNumeros[19].innerHTML = "=";
    cuadriculasNumeros[0].innerHTML = "%";
    cuadriculasNumeros[1].innerHTML = "CE";
    cuadriculasNumeros[2].innerHTML = "C";
    cuadriculasNumeros[3].innerHTML = "÷";
    cuadriculasNumeros[7].innerHTML = "*";
    cuadriculasNumeros[11].innerHTML = "+";
    cuadriculasNumeros[15].innerHTML = "-";

    cuadriculasNumeros[0].style.background = "rgb(233, 229, 236)"
    cuadriculasNumeros[1].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[2].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[3].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[7].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[11].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[15].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[16].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[18].style.background = "rgb(233, 229, 236)";
    cuadriculasNumeros[19].style.background = "rgb(233, 229, 236)";
}

crearBotones();

function escribirNumeros() {
    let numeros = document.querySelectorAll(".numero");
    numeros.forEach(numerosM => {
        numerosM.addEventListener('click', () => {
            const mostrarNumero = document.createTextNode(numerosM.innerHTML);
            resultado.appendChild(mostrarNumero);
        });
    });
}

escribirNumeros();

function calcular() {
    let btnOperacion = document.querySelectorAll(".operacion");
    btnOperacion.forEach(btnMostrarOperacion => {
        btnMostrarOperacion.addEventListener('click', () => {
            let num1 = resultado.innerHTML;
            console.log(num1);
            
        });
    });
}

calcular();

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}