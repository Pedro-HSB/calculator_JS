function inputNum(){
    let num = document.getElementById('resultado').innerHTML;
    if (num.length>13){
        num = num.substring(0, num.length)
    }
}
function calc(sym) {
    switch (sym) {
        case '+':
            result = parseInt(numero1) + parseInt(numero2);
            document.getElementById('resultado').innerHTML = result;
            break;

        case '-':
            result = numero1 - numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        case '/':
            result = numero1 / numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        case '*':
            result = numero1 * numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        default:
            document.getElementById('resultado').innerHTML = 'error';
            break;
    }
}

function insert(num) {
    if (num == 'π') {
        num = 3.141592;
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clear() {
    document.getElementById('resultado').innerHTML = '0';
}

function backspace() {
    let numero = document.getElementById('resultado').innerHTML;
    string = numero.slice(0, -1);
    console.log(string);
    document.getElementById('resultado').innerHTML = string;
}

function numero(num, cont) {

    if (num == 0 || cont == 'c') {
        clear();
    }
    if (num == 0 || cont == 'ce') {
        clear();
    }
    if (num == 1) {
        let numero = document.getElementById('resultado').innerHTML;
        numero1 = numero;
        sym = cont;
        numero = '';
        document.getElementById('resultado').innerHTML = numero;
    }
    let numero = document.getElementById('resultado').innerHTML;
    numero2 = numero;
    numero = '';
    if (num == 2) {
        calc(sym);
    }
}

function quadrado() {
    let num = document.getElementById('resultado').innerHTML;
    num = num *num
    document.getElementById('resultado').innerHTML = num
}

function raiz() {
    let num = document.getElementById('resultado').innerHTML;
    num = Math.sqrt(num)
    document.getElementById('resultado').innerHTML = num
}