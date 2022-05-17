var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var elementP = document.getElementById("text-resultado");

function somar()
{
    
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let resultado = numero1 + numero2;
    elementP.innerHTML = resultado;
}

function subtrair()
{
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let resultado = numero1 - numero2;
    elementP.innerHTML = resultado;
}

function dividir()
{
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let resultado = numero1 / numero2;
    elementP.innerHTML = resultado;
}

function multiplicar()
{
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let resultado = numero1 * numero2;
    elementP.innerHTML = resultado;
}
